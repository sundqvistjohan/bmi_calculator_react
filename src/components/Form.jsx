import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder="Weight (kg/lbs)"
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder="Height (cm/inch)"
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="calcMethod">Method</label>
      <select 
        name="calcMethod"
        id="select-method"
        required
        defaultValue=""
        onChange={props.onChangeHandler}
        >
        <option value="" disabled>Select</option>
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>
      <button id="calculate">Calculate BMI</button>
    </form>
  );
};

export default Form;
