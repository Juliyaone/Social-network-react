import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import Users from './Components/Users/Users';



function App() { 

  return (
    <BrowserRouter>
      <div className="app">
        <div className="container-app">
          <header className='header'>
            <Header />
          </header>
          <aside className='side-bar'>
            <Navbar />
          </aside>
            <main>
              <Routes>
                  <Route path="/"/>
                  <Route path="/profile" element={<Profile />}/>
                  <Route path="/dialogs" element={<DialogsContainer />}/>
                  <Route path="/users" element={<Users/>} />
                  <Route path="/news" element={<News />}/>
                  <Route path="/music" element={<Music />}/>
                  <Route path="/settings" element={<Settings />}/>
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

