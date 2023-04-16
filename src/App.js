import { useState } from "react";
import "./App.css";
import NavigationButton from "./components/navigation-button/NavigationButton";
import CallToActionButton from "./components/call-to-action-button/CallToActionButton";
import FormHeader from "./components/form-header/FormHeader";

function App() {
  return (
    <div className="app">
      <h1>Hello</h1>
      <FormHeader
        title="Personal info"
        description="Please provide your name, email, address and phone number."
      />
    </div>
  );
}

export default App;
