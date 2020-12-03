import React, { useState } from "react";
import {
  CheckboxGroup,
  AllCheckerCheckbox,
  Checkbox,
} from "@createnl/grouped-checkboxes";
import "./App.css";

function App() {
  const [onChange, setOnChange] = useState({});
  const [showOnChange, setShowOnChange] = useState(true);
  return (
    <div className="style">
      <CheckboxGroup onChange={setOnChange}>
        <label>
          <AllCheckerCheckbox />
          <span>All items</span>
        </label>
        <br></br>
        <label>
          <Checkbox />
          <span>Item 1</span>
        </label>
        <br></br>
        <label>
          <Checkbox />
          <span>Item 2</span>
        </label>
        <br></br>
        <label>
          <Checkbox />
          <span>Item 3</span>
        </label>
      </CheckboxGroup>
    </div>
  );
}

export default App;
