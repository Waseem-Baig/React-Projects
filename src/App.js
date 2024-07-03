import { useState } from "react";

function App() {
  const [curDate, setcurDate] = useState(new Date().toDateString());
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // function incrementStep() {
  //   if (step >= 1) {
  //     setStep((s) => s + 1);
  //   }
  // }

  // function decrementStep() {
  //   if (step > 1) {
  //     setStep((s) => s - 1);
  //   }
  // }

  function handleChange(event) {
    setStep(Number(event.target.value));
    console.log(step);
  }

  function incrementCount() {
    const newCount = count + step;
    setCount(newCount);
    const newcurDate = addDays(new Date(), newCount);
    setcurDate(newcurDate.toDateString());
  }

  function decrementCount() {
    const newCount = count - step;
    setCount(newCount);
    const newcurDate = addDays(new Date(), newCount);
    setcurDate(newcurDate.toDateString());
  }

  function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }

  function handleCountChange(e) {
    const newCount = Number(e.target.value);
    setCount(newCount);
    const newCurDate = addDays(new Date(), newCount);
    setcurDate(newCurDate.toDateString());
  }

  return (
    <>
      <header>
        <p>Date Counter</p>
      </header>
      <div className="container">
        <div className="step">
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={handleChange}
          />
          <span>Step: {step}</span>
        </div>
        <div className="count">
          <button className="btn" onClick={decrementCount}>
            -
          </button>
          <input
            type="text"
            value={count}
            onChange={handleCountChange}
            className="text"
          ></input>
          <button className="btn" onClick={incrementCount}>
            +
          </button>
        </div>
        <div className="data">
          <p>
            {count > 0 && `${count} days from today is ${curDate}`}
            {count === 0 && `Today is ${curDate}`}
            {count < 0 && `${-count} days ago was ${curDate}`}{" "}
          </p>
        </div>
        {count !== 0 || step !== 1 ? (
          <div>
            <button
              className="btn"
              onClick={() => {
                setCount(0);
                setStep(1);
              }}
            >
              Reset
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
