import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListBeers from './components/listBeers';
import Detail from './components/detail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ListBeers} />
      <Route path="/detail/:id" component={Detail} />
    </Switch>
  );
}
