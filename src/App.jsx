/* eslint-disable no-undef */
import "./App.css";
import AnotherForm from "./components/AnotherForm/AnotherForm";
import GrandFather from "./components/GrandFather/GrandFather";
import ReusableForm from "./components/ReusableForm/ReusableForm";
import TestReusableForm from "./components/TestReusableForm/TestReusableForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("Sign Up Datas:", data);
  };

  const handleUpdate = (data) => {
    console.log("Updated Data", data);
  };

  const testForm = (data) => {
    console.log("Sign Up Form", data);
  };

  const testUpdateForm = (data) => {
    console.log("Update", data);
  };

  const anotherFormSignUp = data => {
    console.log('Signup form', data);
  }

  const anotherFormUpdate = data => {
    console.log('Another form update' , data);
  }

  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}



      {/* <ReusableForm formTitle={`Sign Up`} handleForm={handleSignUpSubmit}>
        <h2>Sign Up Form</h2>
      </ReusableForm>
      <ReusableForm
        formTitle={`Update User`}
        submitBtnText={`Update`}
        handleForm={handleUpdate}
      >
        <h2>Update Form</h2>
      </ReusableForm> */}





      {/* <TestReusableForm handleForm={testForm}>
        <h2>Sign Up Form</h2>
        <p>Here is the sign up form for visiting National zoo</p>
      </TestReusableForm>

      <TestReusableForm handleForm={testUpdateForm} handleSubmit={"Update"}>
        <h2>Update Form</h2>
        <p>You can update details if any mistaken are happened</p>
      </TestReusableForm> */}




      {/* <AnotherForm handleFormData={anotherFormSignUp} submitButton='SignUp'>
        <h2>Sign Up</h2>
        <p>Please Signup from the below form</p>
      </AnotherForm>


      <AnotherForm handleFormData={anotherFormUpdate} submitButton='Update'>
        <h2>Update</h2>
        <p>If any issue happened, please update quickly</p>
      </AnotherForm> */}


      <GrandFather></GrandFather>

    </>
  );
}

export default App;
