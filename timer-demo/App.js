import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  TouchableOpacity,
  Dimensions,
  Picker,
  Platform 
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
    width : 50,
    ...Platform.select({
      android : {
        color : '#fff',
        backgroundColor: '#07121B',
        marginLeft : 10
      },
      ios : {

      }
    })
  },
  pickerItem : {
    color : '#fff',
    fontSize : 20
  },
  pickerLabel : {
    color : '#fff',
    fontSize : 20
  },
  pickerContainer : {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
  }
});

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
  const minutes = Math.floor(time / 60),
    seconds = time - (minutes * 60);
  return { minutes, seconds }
}

export default (props) =>  {
  
  const [isRunning,setIsRunning] = React.useState(false);
  const [remainingTime, setRemainingTime] = React.useState(0);
  const [selectedMinutes, setSelectedMinutes] = React.useState(0);
  const [selectedSeconds,setSelectedSeconds] = React.useState(0);
  
  const timerRef = React.useRef();

  /* componentDidUpdate(prevProp, prevState) {
    if (this.state.remainingTime === 0 && prevState.remainingTime !== 0)
      this.onStopPress();
  } */

/* componentWillUnmount() {
  if (this.timer) {
    clearInterval(this.timer);
  }
} */

  


  const onStartPress = () => {
    const initialRemainingTime = selectedMinutes * 60 + selectedSeconds;
    setIsRunning(true);
    setRemainingTime(initialRemainingTime);
    console.log(`initialRemainingTime = ${initialRemainingTime}`);
    
    timerRef.current = setInterval(() => {
      console.log(remainingTime);
      const newRemainingTime = remainingTime - 1;
      if (newRemainingTime <= 0){
        onStopPress();
      } else {
        setRemainingTime(newRemainingTime)
      };
    }, 1000);

  }

  const onStopPress = () => {

    if (timerRef.current){
      setIsRunning(false);
      setRemainingTime(0);
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  /* React.useEffect(() => {
    if (remainingTime === 0)
      onStopPress();
    return () => {
      if (timerId) clearInterval(timerId);
    }
  }, [remainingTime]); */

  const getPickerItems = (nos) => {
    const pickerItems = [];
    for (let index = 0; index < nos; index++)
      pickerItems.push(<Picker.Item key={index} value={index} label={formatNumber(index)}></Picker.Item>);
    return pickerItems;
  }

  const { minutes, seconds } = getRemaining(remainingTime);  
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            itemStyle={styles.pickerItem}
            selectedValue={selectedMinutes}
            onValueChange={value => setSelectedMinutes(value)}
            mode="dropdown"
          >
            {getPickerItems(60)}
          </Picker>
          <Text style={styles.pickerLabel}>Minutes</Text>
          <Picker
            style={styles.picker}
            itemStyle={styles.pickerItem}
            selectedValue={selectedSeconds}
            onValueChange={value => setSelectedSeconds(value)}
            mode="dropdown"
          >
            {getPickerItems(60)}
          </Picker>
          <Text style={styles.pickerLabel}>Seconds</Text>
        </View>

        <Text style={styles.timerText}>{`${formatNumber(minutes)}:${formatNumber(seconds)}`}</Text>
        {!isRunning ? (
          <TouchableOpacity style={styles.button} onPress={onStartPress} >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
            <TouchableOpacity style={[styles.button, styles.buttonStop]} onPress={onStopPress}>
              <Text style={[styles.buttonText, styles.buttonStopText]}>Stop</Text>
            </TouchableOpacity>
          )}
      </View>
    );
  };


/* export default class App extends React.Component{
  state = {
    isRunning : false,
    remainingTime : 0, 
    selectedMinutes : 0,
    selectedSeconds : 0
  };

  timerId = null;

  componentDidUpdate(prevProp, prevState) {
    if (this.state.remainingTime === 0 && prevState.remainingTime !== 0)
      this.onStopPress();
  }

  onStartPress = () => {
    this.setState(state => {
      return {
        isRunning : true,
        remainingTime : state.selectedMinutes * 60 + state.selectedSeconds
      }
    });

    this.timerId = setInterval(() => {
        this.setState(state => ({
          remainingTime : state.remainingTime - 1
        }))
    },1000);

  }

  onStopPress = () => {
    this.setState(state => ({
      isRunning : false,
      remainingTime : 0
    }));
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  getPickerItems = (nos) => {
    const pickerItems = [];
    for(let index=0; index < nos; index++)
      pickerItems.push(<Picker.Item key={index} value={index} label={formatNumber(index)}></Picker.Item>);
    return pickerItems;
  }

  componentWillUnmount(){
    if (this.timer){
      clearInterval(this.timer);
    }
  }

  render() {
    const { isRunning, remainingTime } = this.state;
    const {minutes, seconds} = getRemaining(remainingTime);
     return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.pickerContainer}>
          <Picker 
            style={styles.picker} 
            itemStyle={styles.pickerItem} 
            selectedValue={this.state.selectedMinutes} 
            onValueChange={ value => this.setState({ selectedMinutes: value})}
            mode = "dropdown"
          >
            {this.getPickerItems(60)}
          </Picker>
          <Text style={styles.pickerLabel}>Minutes</Text>
          <Picker 
            style={styles.picker} 
            itemStyle={styles.pickerItem} 
             selectedValue={this.state.selectedSeconds}
             onValueChange={value => this.setState({ selectedSeconds: value })}
             mode="dropdown"
          >
             {this.getPickerItems(60)}
          </Picker>
           <Text style={styles.pickerLabel}>Seconds</Text>
         </View>
         
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
} */


