import Header from "./components/Headers.jsx";
import Calculator from "./components/Calculator.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function HandleInput(newValue, inputIdentifier) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, //Adding a '+' will make the value as a number. Because in JS everything is String
      };
    });
  }

  const inputValidation = userInput.duration >= 1;

  return (
    <>
      <Header img="investment-calculator-logo.png" alt="investment" />
      <UserInput onChange={HandleInput} input={userInput} />
      {/*Here when calling the function does not need the parenthesis */}
      {!inputValidation && (
        <p className="center">Duration cannot be 0 or negative value</p>
      )}
      {inputValidation && <Results input={userInput} />}
    </>
  );
}

export default App;
