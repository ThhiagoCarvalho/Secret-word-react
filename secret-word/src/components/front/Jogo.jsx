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
  tentativasFeitas,
}) => {
  const [letra, setLetra] = useState("");
  const letraInputRef = useRef(null);

  const MAX_TENTATIVAS = 5;
  const TAMANHO_PALAVRA = letrasEscolhidas.length;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (letra.length !== TAMANHO_PALAVRA) {
      alert(`Digite exatamente ${TAMANHO_PALAVRA} letras!`);
      return;
    }

    console.log("palavra enviada: " + letra);
    verificarPalavra(letra);
    setLetra("");
    letraInputRef.current.focus();
  };

  const obterClasseLetra = (letraTentada, posicao, palavraTentada) => {
    const palavraCorreta = letrasEscolhidas.join("").toUpperCase();
    const letraCorreta = palavraCorreta[posicao];

    if (letraTentada === letraCorreta) {
      return "letra-correta";
    }

    if (palavraCorreta.includes(letraTentada)) {
      return "letra-presente";
    }

    return "letra-ausente";
  };

  const renderizarLinha = (numeroLinha) => {
    const quadrados = [];
    const tentativa = tentativasFeitas[numeroLinha];

    for (let i = 0; i < TAMANHO_PALAVRA; i++) {
      let conteudo = "";
      let classe = "quadrado-grid";

      if (tentativa) {
        conteudo = tentativa[i];
        const classeLetra = obterClasseLetra(tentativa[i], i, tentativa);
        classe = `quadrado-grid ${classeLetra}`;
      }

      quadrados.push(
        <div key={i} className={classe}>
          {conteudo}
        </div>,
      );
    }

    return (
      <div key={numeroLinha} className="linha-grid">
        {quadrados}
      </div>
    );
  };

  return (
    <div className="jogo">
      {/* Header com pontuação */}
      <div className="jogo-header">
        <p className="pontuacao">
          Pontuação: <span>{pontuacao}</span>
        </p>
      </div>

      {/* Informações do jogo */}
      <div className="jogo-info">
        <div className="categoria">
          <span>Tema: {categoriaEscolhida}</span>
        </div>
      </div>

      {/* Grid de tentativas */}
      <div className="grid-container">
        <div className="grid-tentativas">
          {Array.from({ length: MAX_TENTATIVAS }).map((_, index) =>
            renderizarLinha(index),
          )}
        </div>
      </div>

      {/* Formulário */}
      <div className="letras-container">
        <p>Digite a palavra completa</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letra"
            maxLength={TAMANHO_PALAVRA}
            onChange={(e) => setLetra(e.target.value.toUpperCase())}
            value={letra}
            ref={letraInputRef}
            placeholder={`${TAMANHO_PALAVRA} letras`}
            required
            disabled={tentativasFeitas.length >= MAX_TENTATIVAS}
          />
          <button disabled={tentativasFeitas.length >= MAX_TENTATIVAS}>
            Jogar
          </button>
        </form>
      </div>

      {/* Tentativas anteriores */}
    </div>
  );
};

export default Jogo;
