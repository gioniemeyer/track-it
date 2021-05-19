import { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./Home";
import SubscribePage from './SubscribePage';
import TodaysPage from './TodaysPage';
import HabitsPage from './HabitsPage';
import userContext from '../contexts/UserContext'

export default function App() {
  const [user, setUser] = useState('');

  return (
    <userContext.Provider value={{user, setUser}}>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home setUser={setUser} />
        </Route>
        <Route path='/cadastro' exact>
          <SubscribePage />
        </Route>
        <Route path='/hoje' exact>
          <TodaysPage />
        </Route>
        <Route path='/habitos'>
          <HabitsPage />
        </Route>
      </Switch>
      </BrowserRouter>
    </userContext.Provider>
  );
}

