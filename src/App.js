import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
          </Route>
          <Route path="/register">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
