import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WideButton from '../../util/buttons/wide'


export default class SignUp extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>{this.props.username}</Text>
        <WideButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
