import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterHeader from './RegisterHeader.js';
import Register from './Register.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
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
