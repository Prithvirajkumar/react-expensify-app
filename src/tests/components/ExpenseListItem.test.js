import React from "react";
import { shallow } from "enzyme";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";
import toJSON from "enzyme-to-json";

test("Should render ExpenseListItem with expense", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[1]}></ExpenseListItem>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
