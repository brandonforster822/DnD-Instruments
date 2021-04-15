import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/Navbar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import SearchIndexModal from "./components/SearchIndexModal"
import Search from "./components/SearchPage"
import HomePage from "./components/HomePage"
import DiceBox from "./components/DiceBox"
import CharacterCreation from "./components/CharacterCreation"
import SignupModal from "./components/SignupModal"
import LoginModal from "./components/LoginModal"
import ComingSoonModal from "./components/ComingSoonModal";
import CharacterModal from "./components/CharacterModal"
import { authenticate } from "./services/auth";
import Character from "./components/CharacterModal/Character";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [searchLoaded, setSearchLoaded] = useState(false);
  const [cheat, setCheat] = useState(false)

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} loaded={searchLoaded} setLoaded={setSearchLoaded}/>
      <SearchIndexModal/>
      <Switch>
        <Route path="/search">
          <Search loaded={searchLoaded} setLoaded={setSearchLoaded}/>
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route exact path="/">
          <HomePage cheat={cheat} authenticated={authenticated}/>
        </Route>
        <Route path="/createcharacter">
          <CharacterCreation setCheat={setCheat}/>
        </Route>
        {/* <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <h1>My Home Page</h1>
        </ProtectedRoute> */}
      </Switch>
      <DiceBox/>
      <SignupModal
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          ></SignupModal>
          <LoginModal
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          ></LoginModal>
      <ComingSoonModal />
      <CharacterModal/>
    </BrowserRouter>
  );
}

export default App;
