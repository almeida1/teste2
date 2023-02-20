import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Componente1 from "./componentes/Componente1";
import Counter from "./componentes/Counter";
import App from "./App";

describe(Componente1, () => {
  test("CT01- valida o comportamento inicial do componente", () => {
    //setup (no react significa instanciar o componente)- dado que o componente foi inicializado
    render(<Componente1 />);
    //ação - quando seleciona o elemento que estabelece o estado atual
    const elementHtml = screen.getByText(/Initial/i);
    //entao – resultado esperado aplicacao no estado inicial
    expect(elementHtml.textContent).toBe("Initial State");
  });
  test("CT02- o estado deve mudar com um click no botao de mudanca de estado", () => {
    //setup (no react significa instanciar o componente)- dado que o componente foi inicializado
    render(<Componente1 />);
    //ação - quando executa um click no botao
    fireEvent.click(screen.getByText("State Change Button"));
    const elementHtml = screen.getByText(/Initial/i);
    //entao – o estado muda para estado inicial modificado
    expect(elementHtml.textContent).toBe("Initial State Changed");
  });
  test("CT03- valida o estado inicial da propriedade", () => {
    //setup (no react significa instanciar o componente)- dado que o componente foi inicializado
    render(
      <App>
        {" "}
        <Componente1 />{" "}
      </App>
    );
    //ação - busca o elemento com texto Moe
    const elementHtml = screen.getByText(/Moe/i);
    //entao – o elemento do tipo texto eh moe
    expect(elementHtml.textContent).toBe("Moe");
  });
  test("CT04- valida o estado inicial da propriedade", () => {
    //setup (no react significa instanciar o componente)- dado que o componente foi inicializado
    render(
      <App>
        {" "}
        <Componente1 />{" "}
      </App>
    );
    //ação - quando executa um click no botao change name
    fireEvent.click(screen.getByText("Change Name"));
    const elementHtml = screen.getByText(/Steve/i);
    //entao – o elemento do tipo texto eh modificado para steve
    expect(elementHtml.textContent).toBe("Steve"); //foi incluido um espaço no final do texto
  });
  test("CT05- valida o estado inicial do contador", () => {
    //setup - dado que o componente foi inicializado
    render(
      <App>
        {" "}
        <Componente1 /> <Counter />
      </App>
    );
    //ação - quando seleciona o elemento que estabelece o estado atual do contador
    const valorContador = Number(screen.getByTestId("contador").textContent); //permite encontrar elementos dentro do DOM

    //entao – o estado atual eh 0
    expect(valorContador).toEqual(0);
  });
  test("CT06- o valor do contador deve incrementar de 1 no click do botao", () => {
    //setup - dado que o componente foi inicializado
    render(
      <App>
        {" "}
        <Componente1 /> <Counter />
      </App>
    );
    //ação - quando executa um click no botao contador
    fireEvent.click(screen.getByText("Contador:"));
    const valorContador = Number(screen.getByTestId("contador").textContent);
    //entao – o estado atual eh 1
    expect(valorContador).toEqual(1);
  });
});
