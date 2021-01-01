import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "./actions/filters";
import "normalize.css/normalize.css";
import "./styles/styles.css";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: "Water Bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 300 }));
store.dispatch(
  addExpense({ description: "Rent", amount: 109500, createdAt: 1000 })
);

const jsx = (
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
