import { useState } from "react";
import "./index.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");

  function adicionar() {
    if (texto !== "") {
      setTarefas([
        ...tarefas,
        { nome: texto, feito: false }
      ]);
      setTexto("");
    }
  }

  function concluir(index) {
    const novaLista = [...tarefas];
    novaLista[index].feito = !novaLista[index].feito;
    setTarefas(novaLista);
  }

  function remover(index) {
    const novaLista = tarefas.filter((_, i) => i !== index);
    setTarefas(novaLista);
  }

  const concluidas = tarefas.filter(t => t.feito).length;

  return (
    <div className="container">

      <h1>Lista de tarefas</h1>

      <div className="barra">
        <input
          placeholder="Digite uma tarefa"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />

        <button onClick={adicionar}>
          Adicionar
        </button>
      </div>

      <ul>
        {tarefas.map((t, i) => (
          <li
            key={i}
            className={t.feito ? "feito" : ""}
          >

            <span>{t.nome}</span>

            <div>

              <button
                className="ok"
                onClick={() => concluir(i)}
              >
                ✔
              </button>

              <button
                className="del"
                onClick={() => remover(i)}
              >
                X
              </button>

            </div>

          </li>
        ))}
      </ul>

      <div className="info">
        <p>Total: {tarefas.length}</p>
        <p>Concluídas: {concluidas}</p>
      </div>

    </div>
  );
}

export default App;