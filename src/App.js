import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Tipcalcalculator />
    </div>
  );
}

function Tipcalcalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(1);
  const [percentage2, setPercentage2] = useState(2);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="tip-calculator">
      <h1>Tip Calculator</h1>
      <BillInput bill={bill} onSetBill={setBill} />

      <SelectPercentages percentage1={percentage1} onSelect={setPercentage1}>
        How did you like the service ?
      </SelectPercentages>
      <SelectPercentages percentage2={percentage2} onSelect={setPercentage2}>
        How did your friends like the service{" "}
      </SelectPercentages>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div className="input-group">
      <label>How Much Was the Bill</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentages({ children, percentage, onSelect }) {
  return (
    <div className="input-group">
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was Okay(5%)</option>
        <option value="10">It was Good(10%)</option>
        <option value="20"> So Amazing(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      <button className="h3">
        You Pay ${(bill + tip).toFixed(2)} (${bill.toFixed(2)} + $
        {tip.toFixed(2)} tip)
      </button>
    </h3>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>RESET</button>
    </div>
  );
}
