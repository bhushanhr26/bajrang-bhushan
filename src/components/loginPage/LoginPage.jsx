import React, { useState } from "react";
import "./LoginPage.css";
import InputFields from "../InputFields/InputFields";

export default function LoginPage() {
  const [data, setData] = useState("");
  const [inpValueOne, setInpValueOne] = useState("");
  const [inpValueTwo, SetInpValueTwo] = useState("");
  const sum = (a, b) => {
    setData(Number(a) + Number(b));
  };
  return (
    <div>
      <div>
        <InputFields
          label={"First Name"}
          height="12"
          sum={sum}
          inpValueOne={inpValueOne}
          inpValueTwo={inpValueTwo}
        />
      </div>
      <div>
        <InputFields label={"Last Name"} />
      </div>
      <div>
        <InputFields label={"Address"} />
      </div>
      <div>
        <InputFields label={"Email"} height="34" />
      </div>
      <div>
        <InputFields label={"Phone"} />
      </div>
      <div>
        <InputFields label={"FAX"} />
      </div>
      <div>
        <input
          type="number"
          value={inpValueOne}
          onChange={(e) => {
            setInpValueOne(e.target.value);
          }}
        />
        <input
          type="number"
          value={inpValueTwo}
          onChange={(e) => {
            SetInpValueTwo(e.target.value);
          }}
        />
      </div>
      <div>
        {/* <button onClick={() => sum(inpValueOne, inpValueTwo)}>Click me</button> */}
        {data}
      </div>
    </div>
  );
}
