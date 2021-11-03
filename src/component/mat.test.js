import React from "react";
import { shallow } from "enzyme";
import { Mat } from "./mat";

describe("Test App Entry point", function () {
  it("should have a header tag with Hello world React!", function () {
    const wrapper = shallow(<Mat />);
    expect(wrapper.find("h1").text()).toEqual("Hello world Mat!");
  });
});
