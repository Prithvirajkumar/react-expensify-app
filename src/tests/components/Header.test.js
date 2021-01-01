import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Header from "../../components/Header";

test("Should render Header correctly", () => {
  const wrapper = shallow(<Header></Header>);
  expect(toJSON(wrapper)).toMatchSnapshot();
  //   expect(wrapper.find("h1").text()).toBe("Expensify");
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header></Header>);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
});
