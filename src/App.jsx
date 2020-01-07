import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    <form>
      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder="Weight (kg)"
        name="weight"
        id="weight"
        />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder="Height (cm)"
        name="height"
        id="height"
        />
      <button>Calculate BMI</button>
    </form>
    )
  }
}

export default App;
