import React from "react";
import { shallow } from "enzyme";

import Form from "../components/Form";

describe("Form", () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const describedComponent = shallow(
    <Form
      weight="90"
      height="190"
      calcMethod="metric"
      onChangeHandler={handleChange}
      onSubmitHandler={handleSubmit}
    />
  );
  it("renders with weight prop", () => {
    expect(describedComponent.find("#weight").props().value).toEqual("90");
  });
  it("renders with height prop", () => {
    expect(describedComponent.find("#height").props().value).toEqual("190");
  });
  it("on change the onChangeHandler is called", () => {
    describedComponent.find("#weight").simulate("change");
    expect(handleChange).toHaveBeenCalled();
    describedComponent.find("#height").simulate("change");
    expect(handleChange).toHaveBeenCalled();
  });
  it("on submit the onSubmitHandler is called", () => {
    describedComponent.find("form").simulate("submit");
    expect(handleSubmit).toHaveBeenCalled();
  });
});
