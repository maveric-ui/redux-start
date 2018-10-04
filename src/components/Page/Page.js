import React, {Component} from 'react';
import './Page.less'
import PropTypes from 'prop-types';

class Page extends Component {
  render() {
    const { year, photos } = this.props;
    return (
      <div>
        <p>You have: {photos.length} photos in {year}!</p>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
};

export default Page;