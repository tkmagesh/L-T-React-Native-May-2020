import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

var { height } = Dimensions.get('window');

var box_count = 4;
var box_height = height / box_count - 40;

export default class JustifyContent extends Component {
  render() {
	return (
		<View style={styles.container}>
		    <View style={[styles.box, styles.box1]}></View>
		    <View style={[styles.box, styles.box2]}></View>
		    <View style={[styles.box, styles.box3]}></View>
        <View style={[styles.box, styles.box4]}></View>
		</View>
	);
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between', //flex-end, center, space-around, space-between
  },
  box: {
    height: box_height
  },
  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  },
  box4: {
    backgroundColor: '#e7e7e7'
  }
});      