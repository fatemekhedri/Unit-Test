import React from "react";
import { shallow } from "enzyme";
import Counter from "./counter";
describe("counter component", () => {
  it("start with a current value of 0", () => {
    const wrapper = shallow(<Counter />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("Current Value : 0");
  });
  it("increment current value  1 when the incrment button is clicked", () => {
    const wrapper = shallow(<Counter />);
    const incrementBtn = wrapper.find("button.increment");
    incrementBtn.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("Current Value : 1");
  });
});
