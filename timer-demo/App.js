import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  TouchableOpacity,
  Dimensions 
} from 'react-native';

const screen = Dimensions.get('window'),
  screenWidth = screen.width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button : {
    width : screenWidth / 2,
    height : screenWidth / 2,
    borderRadius : screenWidth / 2,
    borderColor : '#89AAFF',
    borderWidth : 10,
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 30
  },
  buttonText : {
    color : '#89AAFF',
    fontSize : 30
  },
  buttonStop : {
    borderColor: '#FF851B'
  },
  buttonStopText : {
    color: '#FF851B',
  },
  timerText : {
    fontSize : 90,
    color : '#fff'
  }
});

const formatNumber = number => `0${number}`.slice(-2);

console.log(formatNumber(2));

const getRemaining = (time) => {
  const minutes = Math.floor(time / 60),
    seconds = time - (minutes * 60);
  return { minutes, seconds }
}

export default class App extends React.Component{
  state = {
    isRunning : false,
    remainingTime : 5
  };

  timerId = null;

  onStartPress = () => {
    this.setState(state => {
      return {
        isRunning : true
      }
    });

    this.timerId = setInterval(() => {
      let newRemainingTime = this.state.remainingTime - 1;
      if (newRemainingTime >= 0){
        this.setState(state => ({
          remainingTime : newRemainingTime
        }))
      } else {
        this.onStopPress();
      }
    },1000);

  }

  onStopPress = () => {
    this.setState(state => ({
      isRunning : false,
      remainingTime : 5
    }));
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  render() {
    const { isRunning, remainingTime } = this.state;
    const {minutes, seconds} = getRemaining(remainingTime);
     return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.timerText}>{`${formatNumber(minutes)}:${formatNumber(seconds)}`}</Text>
        { !isRunning ? (
          <TouchableOpacity style={styles.button} onPress={this.onStartPress} >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.button, styles.buttonStop]} onPress={this.onStopPress}>
            <Text style={[styles.buttonText, styles.buttonStopText]}>Stop</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}


