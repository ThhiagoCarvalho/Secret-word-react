// components
import PaginaInicial from "./components/front/PaginaInicial";
import Jogo from "./components/front/Jogo";
import Fim from "./components/front/Fim";

//styles CSS
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/word";

const fases = [
  { id: 1, name: "inicio" },
  { id: 2, name: "jogo" },
  { id: 3, name: "fim" },
];

function App() {
  const [gameStage, setGameStage] = useState(fases[0].name);
  const [words] = useState(wordsList);

  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
  const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);

  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativas, setTentativas] = useState(3);
  const [pontuacao, setPontuacao] = useState(0);

  const escolherPalavraECategoria = useCallback(() => {
    const categorias = Object.keys(words);
    const categoria =
      categorias[Math.floor(Math.random() * Object.keys(categorias).length)];
    console.log(categoria);
    const palavra =
      words[categoria][Math.floor(Math.random() * words[categoria].length)];
    console.log(palavra);

    return { palavra, categoria };
  }, [words]);

  const startGame = useCallback(() => {
    limparEstados();
    //escolher categoria e palavra
    const { palavra, categoria } = escolherPalavraECategoria();

    const letrasPalavra = palavra.toLowerCase().split("");
    console.log(letrasPalavra);
    console.log(letrasPalavra);

    setPalavraEscolhida(palavra);
    setCategoriaEscolhida(categoria);
    setLetrasEscolhidas(letrasPalavra);

    setGameStage(fases[1].name);
  }, [escolherPalavraECategoria]);

  const verificarPalavra = (letra) => {
    letra = letra.toLowerCase();
    //checar se a letra ja foi escolhida
    if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) {
      return;
    }

    if (letrasEscolhidas.includes(letra)) {
      setLetrasCorretas((actualLetrasCorretas) => [
        ...actualLetrasCorretas,
        letra,
      ]);
    } else {
      setLetrasErradas((actualLetrasErradas) => [
        ...actualLetrasErradas,
        letra,
      ]);
      setTentativas((actualTentativas) => actualTentativas - 1);
    }
  };

  const limparEstados = () => {
    //setLetrasEscolhidas([]);
    setLetrasCorretas([]);
    setLetrasErradas([]);
  };

  //verificar se as tentativas acabaram
  useEffect(() => {
    if (tentativas <= 0) {
      //resetar todos os estados
      limparEstados();
      setGameStage(fases[2].name);
    }
  }, [tentativas]);

  // verificar se o usuario ganhou
  useEffect(() => {
    const letrasUnicas = [...new Set(letrasEscolhidas)];

    //condicao de vitoria
    if (letrasCorretas.length === letrasUnicas.length) {
      //adicionar pontuacao
      setPontuacao((actualPontuacao) => actualPontuacao + 100);

      //reiniciar o jogo com nova palavra
      limparEstados();
      startGame();
    }
  }, [letrasCorretas, letrasEscolhidas, startGame]);

  const reiniciar = () => {
    setPontuacao(0);
    setTentativas(3);

    setGameStage(fases[0].name);
  };
  return (
    <div className="App">
      {gameStage === "inicio" && <PaginaInicial startGame={startGame} />}
      {gameStage === "jogo" && (
        <Jogo
          verificarPalavra={verificarPalavra}
          palavraEscolhida={palavraEscolhida}
          categoriaEscolhida={categoriaEscolhida}
          letrasEscolhidas={letrasEscolhidas}
          letrasCorretas={letrasCorretas}
          letrasErradas={letrasErradas}
          tentativas={tentativas}
          pontuacao={pontuacao}
        />
      )}
      {gameStage === "fim" && (
        <Fim reiniciar={reiniciar} pontuacao={pontuacao} />
      )}
    </div>
  );
}

export default App;
