import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



/* export default class App extends React.Component{
  state = {
    message : ''
  };
  onButtonPress = () => {
    this.setState({ message : 'The button is pressed!'});
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.onButtonPress()}>
          <Text>Click Me!</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>{this.state.message}</Text>
      </View>
    );
  }
} */

/* export default function App(){
  const [message, setMessage] = React.useState('')
  const onButtonPress = () => {
    setMessage('The button is pressed!');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onButtonPress()}>
        <Text>Click Me!</Text>
      </TouchableOpacity>
      <Text style={styles.textStyle}>{message}</Text>
    </View>
  );
} */

const App = () => {
  const [message, setMessage] = React.useState('')
  const onButtonPress = () => {
    setMessage('The button is pressed!');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onButtonPress()}>
        <Text>Click Me!</Text>
      </TouchableOpacity>
      <Text style={styles.textStyle}>{message}</Text>
    </View>
  );
}
 
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle : { 
    color: '#fc0303', 
    fontSize: 30 
  },
  button : {
    borderColor: '#0324fc',
    borderWidth : 10,
    width : 200,
    height : 200
  }
});
