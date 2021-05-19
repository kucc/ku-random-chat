import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import GlobalStyle from '@components/common/global-style';
import Home from '@pages/home';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import MatchRoom from './pages/match-room';
import Info from './pages/info';
import MyPage from './pages/my-page';
import ChatRoomPage from './pages/chat';
import Main from './pages/main';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route
            path="/chat/:chatRoomId"
            exact
            component={ChatRoomPage}
          ></Route>
          <Route path="/sign-in" exact component={SignIn}></Route>
          <Route path="/sign-up" exact component={SignUp}></Route>
          <Route path="/match-room" exact component={MatchRoom}></Route>
          <Route path="/info" exact component={Info}></Route>
          <Route path="/my-page" exact component={MyPage}></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
