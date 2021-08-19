import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostsList from '../components/PostsList/PostsList';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PostsList />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
