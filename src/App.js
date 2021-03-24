import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterHeader from './components/RegisterHeader.js';
import Register from './components/Register.js';
import LoginHeader from './components/LoginHeader.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import PrivateRoute from './components/PrivateRoute.js';
import ForgotPassword from './components/ForgotPassword.js';
import UpdateProfile from './components/UpdateProfile.js';
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { AuthProvider } from "./contexts/AuthContext.js"

function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
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
          <Route path="/chat">
            <div className="app">
              <div className="app__body">
                <Sidebar />
                <Chat />
              </div>
            </div>
          </Route>
        </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
