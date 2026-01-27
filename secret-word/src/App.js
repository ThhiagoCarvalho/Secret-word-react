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
  const [tentativas, setTentativas] = useState(5);
  const [pontuacao, setPontuacao] = useState(0);

  // NOVO: Controlar tentativas feitas no App
  const [tentativasFeitas, setTentativasFeitas] = useState([]);

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

    setPalavraEscolhida(palavra);
    setCategoriaEscolhida(categoria);
    setLetrasEscolhidas(letrasPalavra);

    setGameStage(fases[1].name);
  }, [escolherPalavraECategoria]);

  // MODIFICADO: Verificar a palavra completa e reiniciar após acerto
  const verificarPalavra = (palavraTentada) => {
    palavraTentada = palavraTentada.toLowerCase();
    const palavraCorreta = letrasEscolhidas.join("").toLowerCase();

    // Adicionar tentativa ao array
    setTentativasFeitas((prev) => [...prev, palavraTentada.toUpperCase()]);

    console.log("Tentativa:", palavraTentada);
    console.log("Palavra correta:", palavraCorreta);

    // Se acertou a palavra
    if (palavraTentada === palavraCorreta) {
      // Calcular pontuação baseado nas tentativas restantes
      const tentativasRestantes = tentativas - tentativasFeitas.length;
      const pontos = tentativasRestantes * 20;
      setPontuacao((actualPontuacao) => actualPontuacao + pontos);

      // IMPORTANTE: Reiniciar o jogo após acerto
      setTimeout(() => {
        startGame(); // Isso já chama limparEstados()
      }, 1500); // Delay de 1.5s para ver a palavra correta
    } else {
      // Diminuir tentativas apenas se errou
      const novasTentativasRestantes =
        tentativas - (tentativasFeitas.length + 1);

      if (novasTentativasRestantes <= 0) {
        // Game Over
        setTimeout(() => {
          setGameStage(fases[2].name);
        }, 1000);
      }
    }
  };

  const limparEstados = () => {
    setLetrasCorretas([]);
    setLetrasErradas([]);
    setTentativas(5);
    setTentativasFeitas([]); // NOVO: Limpar tentativas feitas
  };

  //verificar se as tentativas acabaram
  useEffect(() => {
    if (tentativasFeitas.length >= 5 && gameStage === "jogo") {
      const palavraCorreta = letrasEscolhidas.join("").toLowerCase();
      const ultimaTentativa =
        tentativasFeitas[tentativasFeitas.length - 1]?.toLowerCase();

      // Se a última tentativa não foi a correta, vai para game over
      if (ultimaTentativa !== palavraCorreta) {
        setTimeout(() => {
          limparEstados();
          setGameStage(fases[2].name);
        }, 1000);
      }
    }
  }, [tentativasFeitas, gameStage, letrasEscolhidas]);

  const reiniciar = () => {
    setPontuacao(0);
    setTentativas(5);
    setTentativasFeitas([]); // NOVO: Limpar tentativas

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
          tentativasFeitas={tentativasFeitas} // NOVO: Passar como prop
        />
      )}
      {gameStage === "fim" && (
        <Fim
          reiniciar={reiniciar}
          pontuacao={pontuacao}
          palavraEscolhida={palavraEscolhida}
        />
      )}
    </div>
  );
}

export default App;
