import "./Calculator.style.css";
import { FaUserAlt } from "react-icons/fa";

const Calculator = () => {
  return (
    <div className="calculator-container">
      <div className="left-container">
        <label htmlFor="bill">Bill</label>
        <div className="bill-input-container" id="f">
          <div>$</div>
          <input type="text" placeholder="0" />
        </div>
        <div className="select-tip-container">
          <label htmlFor="tip">Select Tip %</label>
          <div className="select-tip-btns">
            <div className="tip-box tip-box-1" tabindex="0">5%</div>
            <div className="tip-box tip-box-2" tabIndex="0">10%</div>
            <div className="tip-box tip-box-3" tabIndex="0">15%</div>
            <div className="tip-box tip-box-4" tabIndex="0">25%</div>
            <div className="tip-box tip-box-5" tabIndex="0">50%</div>
            <input type="text" name="custom-tip" placeholder="Custom"/>
          </div>
        </div>
        <div className="number-of-ppl-container">
          <label htmlFor="ppl">Number of People</label>
          <div className="people-number-input-container">
            <div><FaUserAlt /></div>
            <input type="text" placeholder="0" />
          </div>
        </div>
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
        <div className="reset-btn">
          <button>RESET</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
