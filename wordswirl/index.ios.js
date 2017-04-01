import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchbleHighlight
} from 'react-native';

export default class wordswirl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  toggleClicked = () => {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{(this.state.clicked) ? "Clicked" : "Not Clicked"}</Text>
        <TouchbleHighlight
          onPress={() => this.toggleClicked()}>
          <Text>Button</Text>
        </TouchbleHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('wordswirl', () => wordswirl);
