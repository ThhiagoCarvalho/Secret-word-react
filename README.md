Secret Word — Adivinha a Palavra
Um jogo interativo de adivinhação de palavras desenvolvido com React.js. O projeto utiliza uma lógica de estados para transitar entre telas, validar letras e gerenciar pontuações, oferecendo uma experiência dinâmica e responsiva.

📋 Sobre o Projeto
O Secret Word é um desafio onde o jogador deve descobrir a palavra secreta com base em uma categoria (dica). A cada acerto, a pontuação aumenta; a cada erro, as tentativas diminuem.

🧠 Conceitos React Aplicados:
Gerenciamento de Estados: Uso intensivo de useState para controlar o fluxo do jogo (Início, Jogo, Fim).

Ciclo de Vida: useEffect para monitorar vitórias e derrotas.

Performance: Implementação de useCallback para otimizar funções e evitar re-renderizações desnecessárias.

Lógica de Dados: Separação da lista de palavras em arquivos de dados (data/words.js).

🚀 Funcionalidades
✅ Fluxo de Telas Dinâmico: Transição entre tela inicial, área de jogo e tela de Game Over.
✅ Sistema de Dicas: Cada palavra é vinculada a uma categoria temática.
✅ Validação Inteligente: Reconhece letras maiúsculas/minúsculas e impede a repetição de letras já chutadas.
✅ Pontuação Progressiva: Acumule pontos conforme avança nas palavras.
✅ Reset Automático: Ao ganhar ou perder, o jogo permite reiniciar o progresso instantaneamente.

🛠️ Tecnologias Utilizadas
React 18

JavaScript (ES6+)

CSS Modules (Estilização isolada por componente)

📦 Instalação e Execução
Para rodar este projeto localmente, siga os passos abaixo:

1. Clonar o Repositório
Bash
git clone https://github.com/ThhiagoCarvalho/Adivinha-a-Palavra.git
cd Adivinha-a-Palavra
2. Instalar Dependências
Bash
npm install
3. Iniciar o Servidor
Bash
npm start
O jogo abrirá automaticamente no seu navegador em http://localhost:3000.

📁 Estrutura de Arquivos
Plaintext
src/
├── components/      # Componentes visuais (StartScreen, Game, GameOver)
├── data/            # Banco de palavras (words.js)
├── App.js           # Cérebro da aplicação (Lógica e Estados)
├── App.css          # Estilos globais
└── index.js         # Ponto de entrada
