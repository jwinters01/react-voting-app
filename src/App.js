import { Provider } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';
import { votingAppStore } from './stores/votingAppStore';

export function App() {
  return (
    <div className="container">
      <header id="page-header">
        <h1>Voting App</h1>
        <nav id="menubar">
          <ul>
            <li className="menuitem"><Link to="/">Home</Link></li>
            <li className="menuitem"><Link to="/registration">Register</Link></li>
            <li className="menuitem"><Link to="/voters">Voters</Link></li>
            <li className="menuitem"><Link to="/elections">Elections</Link></li>
            <li className="menuitem"><Link to="/elections/create">Create Election</Link></li>
          </ul>
        </nav>
      </header>

      <main id="content">
        <Provider store={votingAppStore}>
          <Switch>
            <Route path="/" exact>
              <div></div>
            </Route>
            <Route path="/registration">
              <div></div>
            </Route>
            <Route path="/voters">
              <div></div>
            </Route>
            <Route path="/ballots/:id">
              <div></div>
            </Route>
            <Route path="/elections">
              <div></div>
            </Route>
            <Route path="/elections/create">
              <div></div>
            </Route>
            <Route path="/elections/:id">
              <div></div>
            </Route>
          </Switch>
        </Provider>
      </main>
      <footer id="page-footer">
        <small>Footer</small>
      </footer>
    </div>
  );
}

export default App;
