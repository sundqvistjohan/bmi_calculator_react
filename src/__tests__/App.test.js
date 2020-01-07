import React from "react";
import { mount } from "enzyme";
import App from "../App"

describe("App component", () => {
  const describedComponent = mount(<App />);
  it("Counts using the metric method", () => {
    describedComponent
      .find("Input#weight")
      .simulate("change", { target: { name: "weight", value: "90" } });
    describedComponent
      .find("Input#height")
      .simulate("change", { target: { name: "height", value: "190" } });
    describedComponent
      .find("Select#select-method")
      .props()
      .onChange({ target: { name: "calcMethod", value: "metric" }})
      // .simulate("change", { target: { name: "calcMethod", value: "metric" } });
    describedComponent.find("Form").simulate("submit");
    expect(describedComponent.find("#bmi-message").text()).toEqual(
      "You are Normal-weight with a BMI of 24.93"
    );
  });

  it("Counts using the imperial method", () => {
    describedComponent
      .find("#weight")
      .first()
      .simulate("change", { target: { name: "weight", value: "192" } });
    describedComponent
      .find("#height")
      .first()
      .simulate("change", { target: { name: "height", value: "74" } });
    describedComponent
      .find("#select-method")
      .first()
      .simulate("change", { target: { name: "calcMethod", value: "imperial" } });
    describedComponent.find("form").simulate("submit");
    expect(describedComponent.find("#bmi-message").text()).toEqual(
      "You are Normal-weight with a BMI of 24.65"
    );
  });
});