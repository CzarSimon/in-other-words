import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { font, length, color } from '../../../styles/params';
import card from '../../../styles/card'
import { MKButton, MKColor } from 'react-native-material-kit'

export default class WideButton extends Component {
  render() {
    const { text, action } = this.props;
    return (
      <MKButton
        backgroundColor={MKColor.Teal}
        shadowRadius={2}
        shadowOffset={{width:0, height:3}}
        shadowOpacity={.7}
        shadowColor="black"
        onPress={() => {
          console.log('hi, raised button!');
        }}
        style = {styles.buttonLayout}
        >
        <Text pointerEvents="none"
              style={styles.text}>
          {this.props.text}
        </Text>
      </MKButton>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...card,
    flex: 1,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: color.red,
    padding: length.medium
  },
  buttonLayout: {
    marginHorizontal: length.large,
    padding: length.medium
  },
  text: {
    fontFamily: font.sans.bold,
    fontSize: font.size.large,
    color: color.white,
    alignSelf: 'center',
    fontWeight: 'bold'
  }
})
