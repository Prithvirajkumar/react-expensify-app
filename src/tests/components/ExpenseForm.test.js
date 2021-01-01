import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import expenses from "../fixtures/expenses";
import ExpenseForm from "../../components/ExpenseForm";
import moment from "moment";

test("Should render ExpenseForm Correctly", () => {
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render ExpenseForm Correctly with expenses", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}></ExpenseForm>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  expect(toJSON(wrapper)).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should set description on input change", () => {
  const value = "New description";
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("description")).toBe(value);
});

test("Should set textarea on input change", () => {
  const value = "New not value";
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  wrapper.find("textarea").simulate("change", {
    target: { value },
  });
  expect(wrapper.state("note")).toBe(value);
});

test("Should set amount on if valid input", () => {
  const value = "23.50";
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("amount")).toBe(value);
});

test("Should not set amount if invalid input", () => {
  const value = "12.122";
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("amount")).toBe("");
});

test("Should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}></ExpenseForm>
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

test("Should set new date on date change", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  wrapper.find("SingleDatePicker").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

test("Should set calendar focus on change", () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
  expect(wrapper.state("calendarFocused")).toEqual(focused);
});
