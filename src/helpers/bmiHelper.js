export const calculateBmi = (weight, height, calcMethod) => {
  const metricFactor = 100 * 100
  const imperialFactor = 703
  const calcMethodFactor = calcMethod === 'metric' ? metricFactor : imperialFactor
  const bmiValue = (weight / (height * height) * calcMethodFactor).toFixed(2);
  const bmiMessage = setBMIMessage(bmiValue);
  return [bmiValue, bmiMessage];
}

const setBMIMessage = finalBMI => {
  if (finalBMI < 18.5) {
    return "Underweight";
  }

  if (finalBMI > 18.5 && finalBMI < 25) {
    return "Normal-weight";
  }

  if (finalBMI > 25 && finalBMI < 30) {
    return "Overweight";
  }

  if (finalBMI > 30) {
    return "Obese";
  }
};