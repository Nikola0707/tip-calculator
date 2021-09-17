import "./Calculator.style.css";

const Calculator = () => {
  return (
    <div className="calculator-container">
      <div className="left-container">
        <div className="bill-input-container">
          <label htmlFor="bill">Bill</label>
          <input type="text" placeholder="$ 0" />
        </div>
        <div className="select-tip-container">
          <p className="select-tip-paragraph">Select Tip %</p>
          <div className="select-tip-btns">
            <div className="tip-box">5%</div>
            <div className="tip-box">10%</div>
            <div className="tip-box">15%</div>
            <div className="tip-box">25%</div>
            <div className="tip-box">50%</div>
            <div className="tip-box tip-box-custom">Custom</div>
          </div>
        </div>
        <div className="number-of-ppl-container">
          <label htmlFor="ppl">Number of People</label>
          <input type="text" placeholder="icon  0" />
        </div>
      </div>
      <div className="right-container">
        <div className="tip-amount">
          <div>
            <p className="price-explanation">
              Tip Amount <span className="divide">/ person</span>
            </p>
          </div>
          <div>
            <p className="price">$0.00</p>
          </div>
        </div>
        <div className="total">
          <div>
            <p className="price-explanation">
              Total <span className="divide">/ person</span>
            </p>
          </div>
          <div>
            <p className="price">$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
