import React, { Component } from 'react';
import './User.less';
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    const { name } = this.props;
    return(
        <div>
          <p>Hello, {name}</p>
        </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;