import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function App() {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
  }

  return (
    <div className="app">
      <h4>Toggle switch in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h4>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
      />
      <div style={{ marginTop: 10 }}>Value: {checked ? 'True' : 'False'}</div>
    </div>
  );
}

export default App;