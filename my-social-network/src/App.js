import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Profile/Login/Login';

function App() { 

  return (
    <BrowserRouter>
      <div className="app">
        <div className="container-app">
          <header className='header'>
            <HeaderContainer />
          </header>
          <aside className='side-bar'>
            <Navbar />
          </aside>
            <main>
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
            </main>
            <footer>
              {/* <Footer /> */}
            </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

