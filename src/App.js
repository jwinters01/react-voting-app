import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css';


import { AppHeader } from './components/AppHeader';
import { NavBar } from './components/NavBar';
import { RegistrationToolContainer } from './containers/RegistrationToolContainer';
import { votingAppStore } from './stores/votingAppStore';
import  {VoterTool} from './components/VoterTool'
import { BallotsListTool } from './components/BallotsListTool';
import { Ballot } from './components/Ballot';
import { ElectionTool } from './components/ElectionTool';
import { ElectionCreate } from './components/ElectionCreate';

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
      <AppHeader headerText="Vote!" sloganText=" ..Carpe Diem"/>
      <NavBar items={navBarItems} />
      <main id="content">
        <Provider store={votingAppStore}>
          <Switch>
            <Route path="/" exact>
              <BallotsListTool />
            </Route>
            <Route path="/registration">
            <Provider store={votingAppStore}>
              <RegistrationToolContainer />
            </Provider>
            </Route>
            <Route path="/voters">
              <div><VoterTool/></div>
            </Route>
            <Route path="/ballots/:id">
              <Ballot />
            </Route>
            <Route path="/elections" exact>
              <ElectionTool />
            </Route>
            <Route path="/elections/create" exact>
              <ElectionCreate />
            </Route>
            <Route path="/elections/:id">
              <div></div>
            </Route>
          </Switch>
        </Provider>
      </main>
      <footer id="page-footer">
        <small>2021 Elections</small>
      </footer>
    </div>
  );
}

export default App;