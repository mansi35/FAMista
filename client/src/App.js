import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterHeader from './components/authentication/RegisterHeader.js';
import Register from './components/authentication/Register.js';
import LoginHeader from './components/authentication/LoginHeader.js';
import Login from './components/authentication/Login.js';
import PrivateRoute from './PrivateRoute.js';
import ForgotPassword from './components/authentication/ForgotPassword.js';
import UpdateProfile from './components/authentication/UpdateProfile.js';
import Sidebar from './components/chat/Sidebar';
import Chat from './components/chat/Chat';
import ChatEmpty from './components/chat/ChatEmpty';
import { AuthProvider } from './contexts/AuthContext.js';
import Home from './components/ecommerce/Home.js';
import Checkout from './components/ecommerce/Checkout.js';
import Header from './components/ecommerce/Header';
import MyFeed from './components/social/MyFeed';
import Users from './components/friends/Users';
import Requests from './components/friends/Requests';
import Friends from './components/friends/Friends';
import Room from './components/videocall/Room';
import CreateRoom from './components/videocall/CreateRoom';
import HeaderSocial from './components/social/Header.js';
import SharedBaskets from "./components/ecommerce/SharedBaskets";
import SharedFriendBasket from "./components/ecommerce/SharedFriendBasket";

function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component= {Home} />
          <PrivateRoute path="/dashboard" component={Friends} />
          <PrivateRoute path="/users" component={Users} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/requests" component={Requests} />
          <Route path="/login">
            <LoginHeader />
            <Login />
          </Route>
          <Route path="/register">
            <RegisterHeader />
            <Register />
          </Route>
          <Route path="/forgot-password">
          <ForgotPassword />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <PrivateRoute path="/chat/rooms/:roomId">
          <HeaderSocial /> 
            <div className="app">
                <div className="app__body">
                  <Sidebar />
                  <Chat/>
                </div>
            </div>
          </PrivateRoute>
          <PrivateRoute path="/chat">
            <HeaderSocial />
            <div className="app">
              <div className="app__body">
                <Sidebar/>
                <ChatEmpty />
              </div>
            </div>
          </PrivateRoute>
          <Route path="/call" exact component={CreateRoom} />
          <Route path="/baskets" component={SharedBaskets} />
          <Route path="/basket/:userId" component={SharedFriendBasket} />
          <Route path="/room/:roomID" component={Room} />
          <PrivateRoute path="/social" component={MyFeed} />
        </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
