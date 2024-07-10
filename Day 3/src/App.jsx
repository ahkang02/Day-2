import { useState } from "react";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 150000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 12,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleOnValueChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <UserInput
        userInput={userInput}
        handleOnValueChange={handleOnValueChange}
      />
      {!inputIsValid && (
        <p className="center">Please enter a valid duration (1 year or more)</p>
      )}
      {inputIsValid && <ResultTable userInput={userInput} />}
    </>
  );
}

export default App;
