import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import FlatListDemo from './FlatListDemo'
import data from './data';
import { List, ListItem, SearchBar } from "react-native-elements";


console.log(SearchBar);



export default function App() {
  

  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <FlatListDemo/>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
