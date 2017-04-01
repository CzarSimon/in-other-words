import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WideButton from './features/util/buttons/wide'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  buttonAction = () => {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked
    });
  }

  render() {
    console.log("Starting");
    const { clicked } = this.state
    return (
      <View style={styles.container}>
        <Text>{(clicked) ? "Clicked" : "Not clicked"}</Text>
        <View style={styles.buttonView}>
          <WideButton text={"Button"} action={this.buttonAction} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: "#F8F8F8",
    borderWidth: 1
  },
  buttonView: {
    flexDirection: 'row'
  }
});
