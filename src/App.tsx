import React from "react";
import "./App.css";
import { ItemList } from "./components/ItemList";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemList />
    </div>
  );
}

export default App;
