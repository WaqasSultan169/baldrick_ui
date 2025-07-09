import React from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Test from "./components/Test";
import Port from "./components/Port";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Stats />
      <Test />
      <Port />
    </div>
  );
}

export default App;
