import React, { useEffect, useRef, useState } from 'react'

function OtpApp() {
     const OTP_SIZE = 5;
     const [inputArr, setinputArr] = useState(new Array(OTP_SIZE).fill(""));
     const refArr = useRef([]);

     useEffect(() => {
       refArr.current[0]?.focus(); // Focus on the first input box on mount
     }, []);

     const handleOnchange = (value, index) => {
       const digit = value.replace(/\D/g, "").slice(-1); // Allow only the last numeric digit
       if (!digit) return;

       const newArr = [...inputArr];
       newArr[index] = digit;
       setinputArr(newArr);

       if (index < OTP_SIZE - 1) {
         refArr.current[index + 1]?.focus(); // Move focus to the next input
       }
     };

     const handleOnKeyDown = (e, index) => {
       if (e.key === "Backspace" && !e.target.value && index > 0) {
         refArr.current[index - 1]?.focus(); // Move back on backspace
       }
     };

     const handleSubmit = () => {
       const otp = inputArr.join("");
       console.log("Entered OTP:", otp);
       // Here you can add validation or call an API
     };
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1>Please enter your OTP</h1>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          {inputArr.map((input, index) => (
            <input
              key={index}
              className="otp-input"
              type="text"
              maxLength={1}
              inputMode="numeric"
              pattern="\d*"
              value={input}
              ref={(el) => (refArr.current[index] = el)}
              onChange={(e) => handleOnchange(e.target.value, index)}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              style={{
                width: "40px",
                height: "40px",
                fontSize: "20px",
                textAlign: "center",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          ))}
        </div>
        <button onClick={handleSubmit} style={{ padding: "8px 16px" }}>
          Verify OTP
        </button>
      </div>
    </div>
  );
}

export default OtpApp
