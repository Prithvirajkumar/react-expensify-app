import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

export const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseListFilters></ExpenseListFilters>
      <ExpenseList></ExpenseList>
    </div>
  );
};

export default ExpenseDashboardPage;
