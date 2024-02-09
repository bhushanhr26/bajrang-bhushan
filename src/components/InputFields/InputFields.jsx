import React from "react";
import "../loginPage/LoginPage.css";

export default function InputFields({
  label,
  sum,
  inpValueTwo,
  inpValueOne,
}) {
  return (
    <div onClick={() => sum(inpValueOne, inpValueTwo)}>
      <p className="container">
        {label}
      </p>
      <input type="text" placeholder={`enter your ${label}`} />
    </div>
  );
}

function sum(a, b) {
  return a + b;
}
sum(2, 3);
