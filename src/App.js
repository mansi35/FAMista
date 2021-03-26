import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterHeader from './components/RegisterHeader.js';
import Register from './components/authentication/Register.js';
import LoginHeader from './components/authentication/LoginHeader.js';
import Login from './components/authentication/Login.js';
import Dashboard from './components/authentication/Dashboard.js';
import PrivateRoute from './components/PrivateRoute.js';
import ForgotPassword from './components/ForgotPassword.js';
import UpdateProfile from './components/UpdateProfile.js';
import Sidebar from "./components/chat/Sidebar";
import Chat from "./components/chat/Chat";
import { AuthProvider } from "./contexts/AuthContext.js"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component= {Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/login">
            <LoginHeader />
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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
