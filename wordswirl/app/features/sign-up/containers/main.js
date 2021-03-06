import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUsername, saveNewUser, getUser } from '../../../state/user';
import { head, split } from 'lodash';
import DeviceInfo from 'react-native-device-info';
import SignUp from '../components/sign-up';

class SignUpContainer extends Component {
  componentDidMount() {
    this.props.actions.getUser();
  }

  updateUsername = username => {
    this.props.actions.updateUsername(username)
  }

  saveNewUser = () => {
    const { state, actions } = this.props;
    const { getUniqueID, getDeviceCountry, getDeviceLocale } = DeviceInfo;
    const newUser = {
      name: state.user.name,
      userId: getUniqueID(),
      os: Platform.OS,
      country: getDeviceCountry(),
      language: head(split(getDeviceLocale(), '-'))
    }
    this.props.actions.saveNewUser(newUser);
  }

  render() {
    const { user } = this.props.state;
    if (user.exists) {
      return (<View style={styles.container}><Text>{user.name}</Text></View>) // Change this to home menu container
    } else {
      return (
        <SignUp
          username={user.name}
          updateUsername={this.updateUsername}
          saveNewUser={this.saveNewUser} />
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = state => ({
  state: {
    user: state.user
  }
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getUser,
    updateUsername,
    saveNewUser
  }, dispatch)
})

export default connect(
  state => mapStateToProps(state),
  dispatch => mapDispatchToProps(dispatch)
)(SignUpContainer)
