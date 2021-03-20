import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterHeader from './RegisterHeader.js';
import Register from './Register.js';
import LoginHeader from './LoginHeader.js';
import Login from './Login.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginHeader />
            <Login />
          </Route>
          <Route path="/register">
            <RegisterHeader />
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
