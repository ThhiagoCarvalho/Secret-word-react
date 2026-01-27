import "../css/PaginaInicial.css";

const PaginaInicial = ({ startGame }) => {
  return (
    <div className="pagina-inicial">
      <div className="container-inicial">
        <div className="titulo-quadrados">
          {["SECRET", "WORD"].map((palavra) => (
            <div className="palavra-linha" key={palavra}>
              {palavra.split("").map((letra, i) => (
                <span className="letra-quadrado" key={i}>
                  {letra}
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="subtitulo">Adivinhe a palavra correta!</p>
        <button className="btn-iniciar" onClick={startGame}>
          Começar o Jogo
        </button>
        <div className="footer-decorativo">
          <p>Boa sorte!</p>
        </div>
      </div>
    </div>
  );
};

export default PaginaInicial;
