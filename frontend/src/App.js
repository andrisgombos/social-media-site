import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Feed from './components/Feed';
import FindFriends from './components/FindFriends';
import { withAuth } from './components/HOC';
import ProfilePage from './components/Profile';

// import Verification from "./components/LandingPage/Verification"
// import Congratulations from './components/LandingPage/Congratulations';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/sign-in' component={LandingPage} />
        <Route exact path='/' component={withAuth(Feed)} />
        {/* <Route exact path='/verification' component={Verification} />
        <Route exact path='/gratulations' component={Congratulations}/> */}
        <Route exact path='/profile' component={ProfilePage} />
        <Route exact path='/find-friends' component={withAuth(FindFriends)} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;

