import "./App.css";
import star from "./images/icon-star.svg";
import phone from "./images/illustration-thank-you.svg";
import { useState } from "react";

function App() {
  const [selectedState, setSelectedState] = useState(" ");
  const [thankYou, setThankYou] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <div>
      <div className="App">
        {thankYou === false ? (
          <>
            <div className="star-surround">
              <img src={star} alt="star" />
            </div>
            <p className="how-did-we-do">How did we do?</p>
            <p className="please-select">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="numbers__container">
              <p
                className={`number-circles one ${selectedState}`}
                onClick={() => {
                  setSelectedState("one-selected");
                  setValue(1);
                }}
              >
                1
              </p>
              <p
                className={`number-circles two ${selectedState}`}
                onClick={() => {
                  setSelectedState("two-selected");
                  setValue(2);
                }}
              >
                2
              </p>
              <p
                className={`number-circles three ${selectedState}`}
                onClick={() => {
                  setSelectedState("three-selected");
                  setValue(3);
                }}
              >
                3
              </p>
              <p
                className={`number-circles four ${selectedState}`}
                onClick={() => {
                  setSelectedState("four-selected");
                  setValue(4);
                }}
              >
                4
              </p>
              <p
                className={`number-circles five ${selectedState}`}
                onClick={() => {
                  setSelectedState("five-selected");
                  setValue(5);
                }}
              >
                5
              </p>
            </div>
            <button
              type="submit"
              onClick={() => {
                setThankYou(true);
              }}
            >
              SUBMIT
            </button>
          </>
        ) : (
          <div className="thank-you">
            <img src={phone} alt="phone" />
            <p className="you-selected">You selected {value} out of 5</p>
            <p className="thanks">Thank you!</p>
            <p>
              We appreciate you taking the time to give a rating.If you ever
              need more support dont hesitate to get in touch!
            </p>
          </div>
        )}
      </div>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        .Coded by <a href="#">Amoh Prince</a>.
      </div>
    </div>
  );
}

export default App;
