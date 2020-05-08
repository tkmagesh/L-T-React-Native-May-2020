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


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.timerText}>00:00</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Timer Started!')}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buttonStop]} onPress={() => alert('Timer Stoped!')}>
        <Text style={[styles.buttonText, styles.buttonStopText]}>Stop</Text>
      </TouchableOpacity>
    </View>
  );
}


