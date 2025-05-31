import React, { useEffect, useRef, useState } from 'react'

function Otp() {
      const OTP_SIZE = 5;
      const [inputArr, setinputArr] = useState(new Array(OTP_SIZE).fill(""));
      const refArr = useRef([]);
      useEffect(() => {
        refArr.current[0]?.focus(); // it will focus on the 1st input box when render 1st
      }, []);
      const handleOnchange = (value, index) => {
        if (isNaN(value)) return; //allow only number
        console.log(value);
        const newValue = value.trim(); //will trim down the blank spaces
        const newArr = [...inputArr]; //add old input array inside new arr with spread operator
        newArr[index] = newValue.slice(-1); // it will take
        setinputArr(newArr); //set new array inside old array
        newValue && refArr.current[index + 1]?.focus(); // when newvalue is having value && only the focus will be on 2nd(next) input box
      };
      const handleOnKeyDown = (e, index) => {
        console.log(e);
        if (!e.target.value && e.key == "Backspace") {
          // if backspace is pressed then it will delete the input and get back
          refArr.current[index - 1]?.focus();
        }
      };
  return (
    <div>
      <div>
        <h1>Please enter your otp</h1>
        {inputArr.map((input, index) => {
          return (
            <input
              className="otp-input"
              value={inputArr[index]}
              key={index}
              type="text"
              ref={(input) => (refArr.current[index] = input)}
              onChange={(e) => handleOnchange(e.target.value, index)}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Otp
