import React from "react";
import { shallow } from "enzyme";

import BmiForm from "../components/BmiForm";

describe("BmiForm", () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const describedComponent = shallow(
    <BmiForm
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
  it("renders with calcMethod prop", () => {
    expect(describedComponent.find("#select-method").props().value).toEqual("metric");
  });
  it("on change the onChangeHandler is called", () => {
    describedComponent.find("#weight").simulate("change");
    expect(handleChange).toHaveBeenCalled();
    describedComponent.find("#height").simulate("change");
    expect(handleChange).toHaveBeenCalled();
    describedComponent.find("#select-method").simulate("change");
    expect(handleChange).toHaveBeenCalled();
  });
  it("on submit the onSubmitHandler is called", () => {
    describedComponent.simulate("submit");
    expect(handleSubmit).toHaveBeenCalled();
  });
});
