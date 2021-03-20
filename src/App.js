import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterHeader from './RegisterHeader.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
          </Route>
          <Route path="/register">
            <RegisterHeader />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
