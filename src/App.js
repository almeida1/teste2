import React, { useState } from "react";
import Componente1 from "./componentes/Componente1";
import Counter from "./componentes/Counter";
import Basic from "./componentes/Basic";
function App() {
  const [state, setState] = useState("Some Text");
  const [name, setName] = useState("Moe");

  const changeName = () => {
    setName("Steve");
  };

  return (
    <div className="App">
      <Basic />
      <h1> Counter </h1>
      <Counter />
      <h1> Basic Hook useState </h1>
      <Componente1 name={name} changeName={changeName} />
    </div>
  );
}
export default App;
