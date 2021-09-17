import "./Calculator.style.css";
import { FaUserAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const Calculator = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [totalTip, setTotalTip] = useState(0);
  const [dividedSum, setDividedSum] = useState(0);

    const clearInputHandler = () => {
        setBill(0)
        setTip(0)
        setNumberOfPeople(1)
        setTotalTip(0)
        setDividedSum(0)
    }

  const calculateTip = () => {
    let totalTipResult = (bill * tip) / 100;
    totalTipResult = Math.round(tip * 100) / 100;
    totalTipResult = totalTipResult.toFixed(2);
    setTotalTip(totalTipResult);

    let dividedSumResult = totalTipResult / numberOfPeople;
    dividedSumResult = dividedSumResult.toFixed(2);
    setDividedSum(dividedSumResult);
  };

  useEffect(() => {
    calculateTip();
  }, [tip, numberOfPeople]);

  return (
    <div className="calculator-container">
      <div className="left-container">
        <label htmlFor="bill">Bill</label>
        <div className="bill-input-container" id="f">
          <div>$</div>
          <input
            type="number"
            placeholder="0"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
        <div className="select-tip-container">
          <label htmlFor="tip">Select Tip %</label>
          <div className="select-tip-btns">
            <div
              className="tip-box tip-box-1"
              tabIndex="0"
              onClick={() => setTip(5)}
            >
              5%
            </div>
            <div
              className="tip-box tip-box-2"
              tabIndex="0"
              onClick={() => setTip(10)}
            >
              10%
            </div>
            <div
              className="tip-box tip-box-3"
              tabIndex="0"
              onClick={() => setTip(15)}
            >
              15%
            </div>
            <div
              className="tip-box tip-box-4"
              tabIndex="0"
              onClick={() => setTip(25)}
            >
              25%
            </div>
            <div
              className="tip-box tip-box-5"
              tabIndex="0"
              onClick={() => setTip(50)}
            >
              50%
            </div>
            <input
              type="number"
              name="custom-tip"
              placeholder="Custom"
              onChange={(e) => setTip(e.target.value)}
            />
          </div>
        </div>
        {numberOfPeople > 0 ? (
          <div className="number-of-ppl-container">
            <label htmlFor="ppl">Number of People</label>
            <div className="people-number-input-container">
              <div>
                <FaUserAlt />
              </div>
              <input
                type="number"
                placeholder="0"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="number-of-ppl-container">
            <label htmlFor="ppl">
              Number of People{" "}
              <span style={{ color: "#ce8973", marginLeft: "50px" }}>
                Can't be zero
              </span>
            </label>
            <div
              className="people-number-input-container"
              style={{
                border: "2px solid #ce8973",
              }}
            >
              <div>
                <FaUserAlt />
              </div>
              <input
                type="number"
                placeholder="0"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
      <div className="right-container">
        <div className="tip-and-total-price-container">
          <div className="tip-amount">
            <div>
              <p className="price-explanation">
                Tip Amount <span className="divide">/ person</span>
              </p>
            </div>
            <div>
              <p className="price">${totalTip}</p>
            </div>
          </div>
          <div className="total">
            <div>
              <p className="price-explanation">
                Total <span className="divide">/ person</span>
              </p>
            </div>
            <div>
              <p className="price">${dividedSum}</p>
            </div>
          </div>
        </div>
        <div className="reset-btn">
          <button onClick={() => clearInputHandler()}>RESET</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
