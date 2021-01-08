import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute
            path="/"
            component={LoginPage}
            exact={true}
          ></PublicRoute>
          <PrivateRoute
            path="/dashboard"
            component={ExpenseDashboardPage}
            exact={true}
          ></PrivateRoute>
          <PrivateRoute
            path="/create"
            component={AddExpensePage}
            exact={true}
          ></PrivateRoute>
          <PrivateRoute
            path="/edit/:id"
            component={EditExpensePage}
            exact={true}
          ></PrivateRoute>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
