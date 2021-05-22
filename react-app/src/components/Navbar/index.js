import React, { useState } from 'react';
import { NavLink, useHistory, Redirect } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import "./Navbar.css"
import * as searchActions from "../../store/search"
import { useDispatch, useSelector } from "react-redux"
import { openSignup, openLogin, openComingSoon } from "../../store/modal.js";

const NavBar = ({ authenticated, setAuthenticated, loaded, setLoaded }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const sessionUsername = useSelector((state) => state.session.username)
  const handleSearch = (e) => {
    e.preventDefault()
    setLoaded(false)
    dispatch(searchActions.clearSearch())
    dispatch(searchActions.apiSearch(search))
    console.log('test')
    history.push('/search')
  }

  const handleOpenLogin = () => {
    toggle(!open)
    dispatch(openLogin())
  }

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbarheader__container" >
          <h1 onClick={() => history.push('/')}>DnD Instruments</h1>
        </div>
        <div className="navbarsearch__container">
          <form className="navbarsearch__form">
            <input type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="navbarsearch__input"/>
            <div onClick={(e) => handleSearch(e)} className="navbarsearchbutton__container">
              <i  class="fas fa-search"></i>
            </div>
          </form>
        </div>
        {!authenticated && (
          <div className="navbaraccount__container">
          <p onClick={() => toggle(!open)}>Account</p>
        </div>
        )}
        {authenticated && (
          <div className="navbaraccount__container">
          <p onClick={() => toggle(!open)}>Hello, {sessionUsername}</p>
        </div>
        )}
        
        {open && !authenticated && (
            <div className="dropdown__menu">
              <ul className="dropdown__list">
                <p onClick={() => handleOpenLogin()}>Log in</p>
                <p onClick={() => dispatch(openSignup())}>Sign up</p>
              </ul>
            </div>
          )}
          {open && authenticated && (
            <div className="dropdown__menu">
              <ul className="dropdown__list">
                <p>
                  Account
                </p>
                <LogoutButton
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                />
              </ul>
            </div>
          )}
      </div>
    </div>
  );
}

export default NavBar;