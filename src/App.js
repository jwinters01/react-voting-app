import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import { AppHeader } from './components/AppHeader';
import { NavBar } from './components/NavBar';
import { votingAppStore } from './stores/votingAppStore';

const navBarItems = [
  {
    route: "/",
    linkText: "Home"
  },
  {
    route: "/registration",
    linkText: "Register"
  },
  {
    route: "/voters",
    linkText: "Voters"
  },
  {
    route: "/elections",
    linkText: "Elections"
  },
  {
    route: "/elections/create",
    linkText: "Create Election"
  }
]

export function App() {
  return (
    <div className="container">
      <AppHeader headerText="Code!" />
      <NavBar items={navBarItems} />
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
            <Route path="/elections" exact>
              <div></div>
            </Route>
            <Route path="/elections/create" exact>
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
