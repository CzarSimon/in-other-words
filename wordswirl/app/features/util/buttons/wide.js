import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { font, length, color } from '../../../styles/params';
import card from '../../../styles/card'

export default class WideButton extends Component {
  render() {
    const { text, action } = this.props;
    return (
      <MKButton
        backgroundColor={MKColor.Teal}
        shadowRadius={2}
        shadowOffset={{width:0, height:2}}
        shadowOpacity={.7}
        shadowColor="black"
        onPress={() => {
          console.log('hi, raised button!');
        }}
        >
        <Text pointerEvents="none"
              style={{color: 'white', fontWeight: 'bold',}}>
          RAISED BUTTON
        </Text>
      </MKButton>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...card,
    flex: 1,
    alignItems: 'stretch',
    marginHorizontal: length.medium
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: color.red,
    padding: length.medium
  },
  text: {
    fontFamily: font.sans.bold,
    fontSize: font.size.large,
    color: color.white,
    fontWeight: 'bold'
  }
})
