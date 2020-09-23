import React from 'react';
// library
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// common
import { RouteName } from './common/Const';
import { ReducerProvider } from './common/ReducerContext';
// components
import Top from './components/pages/Top';

function App() {
  return (
    <BrowserRouter>
      <ReducerProvider>
        <Switch>
          <Route exact path={RouteName.ROOT} component={Top} />
        </Switch>
      </ReducerProvider>
    </BrowserRouter>
  );
}

export default App;
