import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.less';
import User from '../../components/User/User';
import Page from '../../components/Page/Page';


class App extends Component {
  render() {
    const { user, page } = this.props;

    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Мой топ фото</h1>
          </header>
          <p className="App-intro">Здесь будут мои самые залайканые фото</p>
          <User name={user.name}/>
          <Page photos={page.photos} year={page.year}/>
        </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user,
    page: store.page,
  }
};

export default connect(mapStateToProps) (App);
