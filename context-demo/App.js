import React from 'react';
import { Text, View, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';

const ThemeContext = React.createContext('light');

class ThemeProvider extends React.Component {
  state = { theme: 'light' }
  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }))
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <TouchableOpacity onPress={this.toggleTheme}>
          <Text>toggle theme</Text>
        </TouchableOpacity>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
// only doing this to shield end-users from the
// implementation detail of "context"
//const ThemeConsumer = ThemeContext.Consumer

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar />
        <ThemeProvider>
          <View>
            <View>
              <View>
                <ThemeContext.Consumer>
                  {theme => <View style={styles[theme]}><Text>{theme}</Text></View>}
                </ThemeContext.Consumer>
              </View>
            </View>
          </View>
          
        </ThemeProvider>
      </SafeAreaView>
    )
  }
}

const styles = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 30
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 30
  },
};

export default App
