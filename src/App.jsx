import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import StatefulForm from "./components/StatefulForm/StatefulForm";
import RefForm from "./components/RefForm/RefForm";
import ReusableForm from "./components/ReusableForm/ReusableForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("Sign Up Datas:", data);
  };

  const handleUpdate = (data) => {
    console.log("Updated Data", data);
  };

  return (
    <>
      <h1> React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      <ReusableForm
        formTitle={`Sign Up`}
        handleForm={handleSignUpSubmit}
      >
        <h2>Sign Up Form</h2>
      </ReusableForm>
      <ReusableForm
        formTitle={`Update User`}
        submitBtnText={`Update`}
        handleForm={handleUpdate}
      >
        <h2>Update Form</h2>
      </ReusableForm>
    </>
  );
}

export default App;
