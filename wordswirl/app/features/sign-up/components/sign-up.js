import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WideButton from '../../util/buttons/wide'
import { font, length } from '../../../styles/params';
import { MKTextField, MKColor } from 'react-native-material-kit';

export default class SignUp extends Component {
  render() {
    const { username, updateUsername } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to wordswirl!</Text>
        <MKTextField
          tintColor={MKColor.Blue}
          textInputStyle={styles.text}
          text={username}
          placeholder="Whats your nic?"
          onTextChange={updateUsername}
          style={styles.textfield}
        />
        <WideButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  textfield: {
    margin: length.large
  },
  text: {
    color: MKColor.Blue,
    fontSize: font.size.large,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  welcomeText: {
    color: MKColor.Red,
    fontSize: font.size.large,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
