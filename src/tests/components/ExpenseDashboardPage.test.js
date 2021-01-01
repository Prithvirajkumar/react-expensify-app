import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

test("Should render ExpenseDashboardPage correctly", () => {
  const wrapper = shallow(<ExpenseDashboardPage></ExpenseDashboardPage>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
