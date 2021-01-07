import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { Header } from "../../components/Header";

test("Should render Header correctly", () => {
  const wrapper = shallow(<Header startLogout={() => {}}></Header>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should call startLogout on button click", () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout}></Header>);
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
});
