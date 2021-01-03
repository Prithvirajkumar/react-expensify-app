import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("Should correctly render ExpensesSummary with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235}></ExpensesSummary>
  );
  expect(wrapper).toMatchSnapshot();
});

test("Should correctly render ExpensesSummary with multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={1}
      expensesTotal={23512340987}
    ></ExpensesSummary>
  );
  expect(wrapper).toMatchSnapshot();
});
