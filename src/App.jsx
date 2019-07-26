import React from "react";
import "./App.css";
import WebcamComponent from "./components/WebcamComponent";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <WebcamComponent />
      </div>
    );
  }
}

export default App;
