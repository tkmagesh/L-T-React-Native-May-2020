import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Products from './Products';
import appStore from './store';

export default function App() {
  return (
    <Provider store={appStore}>    
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <SafeAreaView>
            <Products />
        </SafeAreaView>
      </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
