import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUsername, saveNewUser } from '../../../state/user';
import SignUp from '../components/sign-up';

class SignUpContainer extends Component {
  updateUsername = username => {
    this.props.actions.updateUsername(username)
  }

  saveNewUser = () => {
    const { state, actions } = this.props;
    const newUser = {
      username: state.user.name,
      userId: 'eee'
    }
    this.props.actions.saveNewUser(newUser);
  }

  render() {
    const { user } = this.props.state;
    return (
      <SignUp
        username={user.name}
        updateUsername={this.updateUsername}
        saveNewUser={this.saveNewUser} />
    )
  }
}

const mapStateToProps = state => ({
  state: {
    user: state.user
  }
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateUsername,
    saveNewUser
  }, dispatch)
})

export default connect(
  state => mapStateToProps(state),
  dispatch => mapDispatchToProps(dispatch)
)(SignUpContainer)
