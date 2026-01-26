import "../css/Fim.css";

const Fim = ({ reiniciar, pontuacao }) => {
  return (
    <div className="fim">
      <h2>Fim de Jogo!</h2>

      <div className="pontuacao-final">
        Sua pontuação foi:
        <span>{pontuacao} pontos</span>
      </div>

      <p>
        {pontuacao > 200
          ? "Excelente! Você é um mestre das palavras!"
          : pontuacao > 100
            ? "Muito bem! Continue praticando!"
            : "Não desista! Tente novamente!"}
      </p>

      <button onClick={reiniciar}>Jogar Novamente</button>
    </div>
  );
};

export default Fim;
