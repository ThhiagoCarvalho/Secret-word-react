import "../css/PaginaInicial.css";

const PaginaInicial = ({ startGame }) => {
  return (
    <div className="start">
      <h2>Projeto Secret Word</h2>

      <p>clique no botão para começar</p>
      <button onClick={startGame}>Iniciar jogo</button>
    </div>
  );
};

export default PaginaInicial;
