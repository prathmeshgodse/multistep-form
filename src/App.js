import { useState } from "react";
import "./App.css";
import NavigationButton from "./components/navigation-button/NavigationButton";
import CallToActionButton from "./components/call-to-action-button/CallToActionButton";

function App() {
  return (
    <div className="app">
      <h1>Hello</h1>
      <CallToActionButton
        label="Next Action"
        onClick={() => console.log("Clicked")}
        isFinalAction={false}
      />
    </div>
  );
}

export default App;
