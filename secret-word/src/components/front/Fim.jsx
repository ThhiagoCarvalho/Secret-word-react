import "../css/Fim.css";

const Fim = ({ reiniciar, pontuacao, palavraEscolhida }) => {
  return (
    <div className="fim">
      <div className="fim-container">
        <h2 className="fim-titulo">
          {pontuacao > 0 ? "Parabéns!" : "Fim de Jogo!"}
        </h2>

        <div className="palavra-revelada">
          <p>A palavra era:</p>
          <span className="palavra-destaque">{palavraEscolhida}</span>
        </div>

        <div className="pontuacao-final">
          <p>Pontuação Total</p>
          <span className="pontos">{pontuacao}</span>
        </div>

        {/* Mensagem motivacional */}
        <p className="mensagem-final">Muito bem! Continue praticando =)</p>

        {/* Botões */}
        <div className="acoes-fim">
          <button className="btn-reiniciar" onClick={reiniciar}>
            Jogar Novamente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fim;
