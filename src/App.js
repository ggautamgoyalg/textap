import React, { useState } from "react";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const handelMode = () => {
    if (mode === "light") {
      updateMode("dark");
      document.body.style.backgroundColor = "#042743";
      updateAlert("success","dark mode is enabled")
    } else {
      updateMode("light");
      document.body.style.backgroundColor = "white";
      updateAlert("success","dark mode is disabled")
    }
  };

  const [mode, updateMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const updateAlert = (status, message) => {
    setAlert({ status: status, message: message })
    setTimeout(()=>{
     setAlert(null); 
    },2000);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        handelMode={handelMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter Your Text"
          mode={mode}
          handelMode={handelMode}
        />
      </div>

      {/* <About/> */}
    </>
  );
}

export default App;
