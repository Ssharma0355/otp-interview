import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const OTP_SIZE = 5;
  const [inputArr, setinputArr] = useState(new Array(OTP_SIZE).fill(""));
  const refArr = useRef([]);
  const handleOnchange =(value, index)=>{
    if(isNaN(value)) return; //allow only number
    console.log(value)
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    newValue && refArr.current[index + 1]?.focus();

    setinputArr(newArr);
  }
  const handleOnKeyDown =(e, index)=>{
    console.log(e)
    if(!e.target.value && e.key == "Backspace") {
    refArr.current[index - 1]?.focus();
    }
  }
  useEffect(()=>{
    refArr.current[0]?.focus()
  },[])
  return (
    <div>
      <h1>Please enter your otp</h1>
      {inputArr.map((input, index) => {
        return (
          <input
            className="otp-input"
            value={inputArr[index]}
            // maxLength={1}
            key={index}
            type="text"
            ref={(input)=>(refArr.current[index]=input)}
            onChange={(e)=>handleOnchange(e.target.value, index)}
            onKeyDown={(e)=>handleOnKeyDown(e.target.value, index)}
          />
        );
      })}
    </div>
  );
}

export default App;
