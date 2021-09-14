import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from '@src/screens/HomeScreen';
import '@styles/less/app.less';

/**
 * Application Component
 */
const App: React.FC = () => {
  return (
    <Switch>
      <Route path='/' component={HomeScreen} />
    </Switch>
  );
};

/** Export module as HOT 🔥 */
export default hot(module)(App);
