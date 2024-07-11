import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [myTipPercentage, setMyTipPercentage] = useState(0);
  const [friendTipPercentage, setFriendTipPercentage] = useState(0);

  function handleBillChange(e) {
    setBill(Number(e.target.value));
  }

  function handleMyTip(e) {
    setMyTipPercentage(Number(e.target.value) || 0);
  }

  function handleFriendTip(e) {
    setFriendTipPercentage(Number(e.target.value) || 0);
  }

  function totalTip() {
    return Math.round((bill * (myTipPercentage + friendTipPercentage)) / 200);
  }

  function reset() {
    setBill(0);
    setMyTipPercentage(0);
    setFriendTipPercentage(0);
  }

  return (
    <div>
      <Header />
      <div className="app">
        <Bill setBill={handleBillChange} bill={bill} />
        <Tip setTip={handleMyTip} tipPercentage={myTipPercentage}>
          <p>How did you like the service? </p>
        </Tip>
        <Tip setTip={handleFriendTip} tipPercentage={friendTipPercentage}>
          <p>How did your friend like the service?</p>
        </Tip>
        <Output bill={bill} tip={totalTip()} />
        <Reset reset={reset} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Tip Calculator</h1>
    </div>
  );
}

function Bill({ setBill, bill }) {
  return (
    <div className="bill">
      <p>How much was the bill? </p>
      <input
        type="number"
        onChange={setBill}
        value={bill === 0 ? "" : bill}
        placeholder="Enter bill amount"
      />
    </div>
  );
}

function Tip({ children, setTip, tipPercentage }) {
  return (
    <div className="tip">
      <span>{children} </span>
      <select name="tip" id="tip" onChange={setTip} value={tipPercentage}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    bill > 0 && (
      <div>
        <h2>
          You Pay ${bill + tip} (${bill} + ${tip} tip)
        </h2>
      </div>
    )
  );
}

function Reset({ reset }) {
  return (
    <div>
      <button className="btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
