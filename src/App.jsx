// pratham.sharma@viacom18.com
import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIcon() {
    setIsOpen((current) => !current);
  }

  return (
    <div className="container">
      <div className={`drawer ${isOpen ? "open" : "closed"}`}>
        <p>Welcome to the expandable drawer!</p>
      </div>
      <button
        className={`icon ${isOpen ? "cross" : "arrow"}`}
        onClick={toggleIcon}
      >
        {isOpen ? "X" : "↑"}
      </button>
    </div>
  );
}

export default App;
