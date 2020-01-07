import React from "react";

const Form = props => {
  return (
    <form>
      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder="Weight (kg)"
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder="Height (cm)"
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button id="culculate">Calculate BMI</button>
    </form>
  );
};

export default Form;
