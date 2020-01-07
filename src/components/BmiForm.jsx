import React from "react";
import { Form } from "semantic-ui-react"

const options = [
  { key: 'metric', text: 'Metric', value: 'metric' },
  { key: 'imperial', text: 'Imperial', value: 'imperial' }
]

const BmiForm = props => {
  return (
    <Form onSubmit={props.onSubmitHandler}>
      <Form.Input
        label='Weight'
        type='number'
        required
        placeholder='Weight (kg/lbs)'
        value={props.weight}
        name='weight'
        id='weight'
        onChange={props.onChangeHandler}
      />
      <Form.Input
        label='Height'
        type='number'
        required
        placeholder='Height (cm/inch)'
        value={props.height}
        name='height'
        id='height'
        onChange={props.onChangeHandler}
      />
      <Form.Select
        label='Method'
        required
        name='calcMethod'
        id='select-method'
        options={options}
        value={props.calcMethod}
        onChange={props.onChangeHandler}
      />
      <Form.Button 
        id="calculate"
        type="submit"
        disabled={!props.calcMethod}
        >
        Calculate BMI
        </Form.Button>
    </Form>
  );
};

export default BmiForm;
