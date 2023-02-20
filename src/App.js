import React, { useState } from "react";
import "./App.css";
import Componente1 from "./componentes/Componente1";
import Counter from "./componentes/Counter";
import Basic from "./componentes/Basic";

function App() {
  const [name, setName] = useState("Moe");

  const changeName = () => {
    setName("Steve");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Basic />
        <h5> Contador </h5>
        <Counter />
        <h5> Basic Hook useState </h5>
        <div className="App-fonte">
          <Componente1 name={name} changeName={changeName} />
        </div>
      </header>
    </div>
  );
}
export default App;
