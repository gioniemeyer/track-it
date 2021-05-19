import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./Home";
import SubscribePage from './SubscribePage';

export default function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path='/cadastro' exact>
        <SubscribePage />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

