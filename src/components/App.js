import { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./Home";
import SubscribePage from './SubscribePage';
import TodaysPage from './TodaysPage';
import HabitsPage from './HabitsPage';
import userContext from '../contexts/UserContext'
import LoadContext from '../contexts/LoadContext';

export default function App() {
  const [user, setUser] = useState('');
  const [load, setLoad] = useState(false);


  return (
    <userContext.Provider value={{user, setUser}}>
      <LoadContext.Provider value={{load, setLoad}}>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home load={load} setLoad={setLoad} />
          </Route>
          <Route path='/cadastro' exact>
            <SubscribePage load={load} setLoad={setLoad} />
          </Route>
          <Route path='/hoje' exact>
            <TodaysPage />
          </Route>
          <Route path='/habitos'>
            <HabitsPage load={load} setLoad={setLoad} />
          </Route>
        </Switch>
        </BrowserRouter>
      </LoadContext.Provider>
    </userContext.Provider>
  );
}

