import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterHeader from './RegisterHeader.js';
import Register from './Register.js';
import LoginHeader from './LoginHeader.js';
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import PrivateRoute from './PrivateRoute.js';
import ForgotPassword from './ForgotPassword.js';
import UpdateProfile from './UpdateProfile.js';
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
        </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
