// screens/BlogDetails.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BlogDetails extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Blog Details Screen - for Blog {this.props.route.params.blogId}</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Blog"
          onPress={() => this.props.navigation.navigate('Blog')}
        />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.pop()}
        />
      </View>
    );
  }
}

export default BlogDetails;