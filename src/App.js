import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#ffffff'); // Default white background

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#E74C3C', '#1ABC9C','#ffffff','#000'];

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Color Picker</h1>
      <div className="color-buttons">
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => changeColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
