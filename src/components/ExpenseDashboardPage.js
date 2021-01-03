import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

export const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpensesSummary></ExpensesSummary>
      <ExpenseListFilters></ExpenseListFilters>
      <ExpenseList></ExpenseList>
    </div>
  );
};

export default ExpenseDashboardPage;
