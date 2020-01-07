import React from "react";
import { shallow } from "enzyme";

import Message from "../components/Message";

describe("Message component", () => {
  const describedComponent = shallow(
    <Message bmiMessage="Normal-weight" bmiValue="23.59" />
  );

  it("renders with message prop", () => {
    expect(describedComponent.find("#bmi-message").text()).toEqual(
      "You are Normal-weight with a BMI of 23.59"
    );
  });
});
