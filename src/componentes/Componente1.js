import React, { useState } from "react";

const Componente1 = (props) => {
  const [state, setState] = useState("Initial State");

  const changeState = () => {
    setState("Initial State Changed");
  };

  const changeNameToSteve = () => {
    props.changeName();
  };

  return (
    <div>
      <button onClick={changeState}>State Change Button</button>
      <div>
        <p>{state} </p>
      </div>
      <button onClick={changeNameToSteve}>Change Name</button>
      <p>{props.name}</p>
    </div>
  );
};

export default Componente1;
