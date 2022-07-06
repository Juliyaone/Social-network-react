import { Routes, Route, HashRouter } from 'react-router-dom';
import { Suspense } from 'react';


import Navbar from './Components/Navbar/Navbar';

import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Profile/Login/Login';
import React from 'react';
import withRouter from './Components/hoc/withRouter';
import { compose } from 'redux';
import {connect} from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import PreLoader from './Components/common/preloader/PreLoader';

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));



class App extends React.Component { 

  componentDidMount() {
    this.props.initializeApp();
  }

  render () {
    if(!this.props.initialized) {
      <PreLoader/>
    }
    return (
      <HashRouter>
        <div className="app">
          <div className="container-app">
            <header className='header'>
              <HeaderContainer />
            </header>
            <aside className='side-bar'>
              <Navbar />
            </aside>
              <main>
              <Suspense fallback={<div><PreLoader isFetching={this.props.isFetching}/></div>}>
                <Routes>
                    <Route path="/"/>
                    <Route path="/profile" element={<ProfileContainer />}/>
                    <Route path="/profile/:id" element={<ProfileContainer />}/>
                    <Route path="/dialogs" element={<DialogsContainer />}/>
                    <Route path="/users" element={<UsersContainer />} />
                    <Route path="/news" element={<News />}/>
                    <Route path="/music" element={<Music />}/>
                    <Route path="/settings" element={<Settings />}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
                </Suspense>

              </main>
              <footer>
                {/* <Footer /> */}
              </footer>
          </div>
        </div>
      </HashRouter>
    );
  }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  isFetching: state.usersPage.isFetching
})



export default compose( withRouter, connect(mapStateToProps, {initializeApp}))(App);

