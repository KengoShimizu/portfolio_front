import React from 'react';
import './App.css';
// library
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// common
import { RouteName } from './common/Const';
import { ReducerProvider } from './common/ReducerContext';
// components
import Top from './components/pages/Top';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ReducerProvider>
          <Switch>
            <Route exact path={RouteName.ROOT} component={Top} />
          </Switch>
        </ReducerProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
