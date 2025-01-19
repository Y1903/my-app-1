import React, { useState } from "react";
import Lamp from "./components/Lamp";
import Dialog from "./components/Dialog";
import Square from "./components/Square";

// const App = () => {
//   return (
//     <div>
//       <Dialog userName="Yuliia" />
//     </div>
//   );
// };



// const App = () => {
//   return (
//     <div>
//       <h1>Welcome to the Lamp App</h1>
//       <Lamp />
//     </div>
//   );
// };




const App = () => {
  const [showSquare, setShowSquare] = useState(false);

  const toggleSquare = () => {
    setShowSquare((prev) => !prev);
  };
  return (
    <div>
      <h1>Toggle Square Component</h1>
      <button className="button" onClick={toggleSquare}>
        {showSquare ? "Hide Square" : "Show Square"}
      </button>
      {showSquare && <Square />}
    </div>
  );
};

export default App;
