import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Componente1 from "./componentes/Componente1";
import Counter from "./componentes/Counter";
import App from "./App";

describe(Componente1, () => {
  test("CT01- valida o comportamento inicial do componente", () => {
    //setup (no react significa instanciar o componente)- dado que o componente foi inicializado
    render(<Componente1 />);
    //ação (no react significa selecionar um elemento html) - quando click no botao
    const elementHtml = screen.getByText(/Initial/i);
    //entao – a aplicacao esta no estado inicial
    expect(elementHtml.textContent).toBe("Initial State "); //foi incluido um espaço no final do texto
  });
  test("CT02- o estado deve mudar com um click no botao de mudanca de estado", () => {
    //setup (no react significa instanciar o componente)- dado que o componente foi inicializado
    render(<Componente1 />);
    //ação (no react significa selecionar um elemento html) - quando click no botao
    fireEvent.click(screen.getByText("State Change Button"));
    const elementHtml = screen.getByText(/Initial/i);
    //entao – o estado muda para estado inicial modificado
    expect(elementHtml.textContent).toBe("Initial State Changed "); //foi incluido um espaço no final do texto
  });
  test("CT03- valida o estado inicial da propriedade", () => {
    //setup (no react significa instanciar o componente)- dado que o componente foi inicializado
    render(
      <App>
        {" "}
        <Componente1 />{" "}
      </App>
    );
    //ação (no react significa selecionar um elemento html)
    const elementHtml = screen.getByText(/Moe/i);
    //entao – o estado muda para estado inicial modificado
    expect(elementHtml.textContent).toBe("Moe"); //foi incluido um espaço no final do texto
  });
  test("CT04- valida o estado inicial da propriedade", () => {
    //setup (no react significa instanciar o componente)- dado que o componente foi inicializado
    render(
      <App>
        {" "}
        <Componente1 />{" "}
      </App>
    );
    //ação (no react significa selecionar um elemento html)
    fireEvent.click(screen.getByText("Change Name"));
    const elementHtml = screen.getByText(/Steve/i);
    //entao – o estado muda para estado inicial modificado
    expect(elementHtml.textContent).toBe("Steve"); //foi incluido um espaço no final do texto
  });
  test("CT05- valida o estado inicial da propriedade", () => {
    //setup (no react significa instanciar o componente)- dado que o componente foi inicializado
    render(
      <App>
        {" "}
        <Componente1 /> <Counter />
      </App>
    );
    //ação (no react esta tipicamente associado a um elemento html)
    const valorContador = Number(screen.getByTestId("contador").textContent); //permite encontrar elementos dentro do DOM

    //entao – o estado inicial eh zero
    expect(valorContador).toEqual(0);
  });
  test("CT06- o valor do contador deve incrementar de 1 no click do botao", () => {
    render(
      <App>
        {" "}
        <Componente1 /> <Counter />
      </App>
    );
    fireEvent.click(screen.getByText("Contador:"));

    const valorContador = Number(screen.getByTestId("contador").textContent);
    expect(valorContador).toEqual(1);
  });
});
