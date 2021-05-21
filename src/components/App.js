import { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./Home";
import SubscribePage from './SubscribePage';
import TodaysPage from './TodaysPage';
import HabitsPage from './HabitsPage';
import userContext from '../contexts/UserContext';
import LoadContext from '../contexts/LoadContext';
import HabitsContext from '../contexts/HabitsContext';
import TodaysHabitContext from '../contexts/TodaysHabitContext';
import HistoryPage from './HistoryPage';

export default function App() {
  const [user, setUser] = useState('');
  const [load, setLoad] = useState(false);
  const [habits, setHabits] = useState([]);
  const [today, setToday] = useState([]);

  return (
    <userContext.Provider value={{user, setUser}}>
      <LoadContext.Provider value={{load, setLoad}}>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path='/cadastro' exact>
            <SubscribePage />
          </Route>
          <HabitsContext.Provider value={{habits, setHabits}}>
            <TodaysHabitContext.Provider value={{today, setToday}}>
              <Route path='/hoje' exact>
                <TodaysPage />
              </Route>
              <Route path='/habitos'>
                <HabitsPage />
              </Route>
              <Route path='/historico'>
                <HistoryPage />
              </Route>
              </TodaysHabitContext.Provider>
          </HabitsContext.Provider>
        </Switch>
        </BrowserRouter>
      </LoadContext.Provider>
    </userContext.Provider>
  );
}

