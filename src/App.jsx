import React, { Component } from "react";
import BmiForm from "./components/BmiForm";
import Message from "./components/Message";
import { calculateBmi } from "./helpers/bmiHelper";
import "./App.css"

class App extends Component {
  state = {
    weight: "",
    height: "",
    calcMethod: "",
    bmiValue: "",
    bmiMessage: ""
  };

  onChangeHandler = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height,
      this.state.calcMethod
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  render() {
    return (
      <div className="ui main container">
        <BmiForm
          weight={this.state.weight}
          height={this.state.height}
          calcMethod={this.state.calcMethod}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
          />
        )}
      </div>
    );
  }
}

export default App;
