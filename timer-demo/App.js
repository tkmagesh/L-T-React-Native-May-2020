import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  TouchableOpacity,
  Dimensions,
  Picker 
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
  },
  picker : {
    width : 50
  },
  pickerItem : {
    color : '#fff',
    fontSize : 20
  },
  pickerLabel : {
    color : '#fff',
    fontSize : 20
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
        <Picker style={styles.picker} itemStyle={styles.pickerItem} selectedValue="3">
           <Picker.Item key="1" label="1" value="1" />
           <Picker.Item key="2" label="2" value="2" />
           <Picker.Item key="3" label="3" value="3" />
           <Picker.Item key="4" label="4" value="4" />
        </Picker>
        <Text style={styles.pickerLabel}>Minutes</Text>
         <Picker style={styles.picker} itemStyle={styles.pickerItem} selectedValue="3">
           <Picker.Item key="1" label="1" value="1" />
           <Picker.Item key="2" label="2" value="2" />
           <Picker.Item key="3" label="3" value="3" />
           <Picker.Item key="4" label="4" value="4" />
         </Picker>
         <Text style={styles.pickerLabel}>Seconds</Text>
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


