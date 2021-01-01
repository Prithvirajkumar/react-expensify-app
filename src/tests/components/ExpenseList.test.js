import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";
import toJSON from "enzyme-to-json";

test("Should render ExpenseList with expense", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}></ExpenseList>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render ExpenseList with empty expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={[]}></ExpenseList>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
