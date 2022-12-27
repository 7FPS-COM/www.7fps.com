import './scss/layout/App.scss';
import './scss/layout/reset.scss';
import './scss/layout/header.scss';

import './scss/colors/light.scss';
import './scss/colors/dark.scss';

import './scss/layout/content.scss';
import './fonts/fonts.css';

import {
  Routes,
  Route
} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useEffect, useState, createContext } from 'react';

import useLocalStorage from './hooks/useLocalStorage';
import getUserMe from './api/client/user/getUserMe';

import NotesPage from './pages/notes/NotesPage';

import api_urls from './constants/api_urls';
import LootPage from './pages/loot/LootPage';
import EventsPage from './pages/events/EventsPage';
import Loading from './components/Loading/Loading';
import setTitle from './utils/setTitle';
import AboutPage from './pages/about/AboutPage';

export const Context = createContext(null)

function Layout() {
  const [theme, setTheme] = useLocalStorage("theme", "light")
  useEffect(() => {
    const body = document.querySelector('body')
    if(theme === "light") {
      body.classList.add("light")
      body.classList.remove("dark")
    }
    if(theme === "dark") {
      body.classList.add("dark")
      body.classList.remove("light")
    }
  }, [theme])

  const [isServerConnectionError, setIsServerConnectionError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const promise = getUserMe()
    promise.then(result => {
      try {
        const user_parsed = JSON.parse(result)
        setUser(user_parsed)
        setIsServerConnectionError(false)
        setIsLoading(false)
      } catch (error) {
        setIsServerConnectionError(true)
        setIsLoading(true)
      }
    });
    promise.catch(error => setIsServerConnectionError(true));
  }, [])

  useEffect(() => {
    setTitle(null)
  },[])

  return (
    <Context.Provider value={{isServerConnectionError, setIsServerConnectionError, isLoading, setIsLoading, user, setUser}}>
      
      
      <div className='App'>{isLoading ? 
      <Loading fullscreen={true} isServerConnectionError={isServerConnectionError}/>
      : <>
        <header style={{opacity: user === null ? 0 : 1}}>
        <ul className='header__links'>
          <li><NavLink to="/" className='header__links_logo'>
            
          <img alt="logo-dark" className='header__links_logo_img-dark' src="/LOGO-DARK-THEME.png"/>
          
          <img alt="logo-light" className='header__links_logo_img-light' src="/LOGO-LIGHT-THEME.png"/>
          
          </NavLink></li>

          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/loot">Loot List</NavLink></li>
          <li><NavLink to="/notes">Notes</NavLink></li>
          <button className='button' onClick={() => {return theme !== 'light' ? setTheme('light') : setTheme('dark')}}>{theme}</button>
          <li>{user === null ? 'Sign In' : user.auth ? <a className='auth' href={api_urls.logout_url}>Sign Out</a> : <a className='auth' href={api_urls.login_url}>Sign In</a> }</li>
        </ul>
      </header>

      <div className='content'>
        <Routes>
            {/* <Route path="*" element={<div>Error</div>}/>   */}
            <Route path="/" element={<AboutPage/>}/>  
            <Route path="/events/*" element={<EventsPage/>}/>
            <Route path="/loot" element={<LootPage/>}/>
            <Route path="/notes/*" element={<NotesPage/>}/>
        </Routes>
      </div>
      </>
      }
    </div>
    </Context.Provider>
  )
}

export default Layout;
