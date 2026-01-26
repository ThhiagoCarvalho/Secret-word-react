import "../css/Jogo.css";
import { useState, useRef } from "react";
const Jogo = ({
  verificarPalavra,
  palavraEscolhida,
  categoriaEscolhida,
  letrasEscolhidas,
  letrasCorretas,
  letrasErradas,
  tentativas,
  pontuacao,
}) => {
  const [letra, setLetra] = useState("");
  const letraInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("letra enviada: " + letra);
    verificarPalavra(letra);
    setLetra("");
    letraInputRef.current.focus();
  };

  return (
    <div className="jogo">
      <p className="pontuacao">
        <span>Pountuacao : {pontuacao}</span>
      </p>
      <h3>Adivinhe a palavra:</h3>
      <h3 className="categoria">
        Dica sobre a palavra: <span>{categoriaEscolhida}</span>
      </h3>
      <p>voce tem {tentativas} tentativas</p>
      <div className="palavra-container">
        {letrasEscolhidas.map((letra, i) =>
          letrasCorretas.includes(letra) ? (
            <span key={i} className="letra">
              {letra}
            </span>
          ) : (
            <span key={i} className="caixa"></span>
          ),
        )}
      </div>
      <div className="letras-container">
        <p>Escolha uma letra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letra"
            maxLength={1}
            onChange={(e) => setLetra(e.target.value)}
            value={letra}
            ref={letraInputRef}
            required
          />
          <button>Jogar</button>
        </form>
      </div>

      <div className="palavras-erradas">
        <p>palavras ja utilizadas</p>
        {letrasErradas.map((letra, i) => (
          <span key={i}>{letra}</span>
        ))}
      </div>
    </div>
  );
};

export default Jogo;
