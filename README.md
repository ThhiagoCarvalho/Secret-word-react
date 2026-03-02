# 🎯 Secret Word --- Adivinha a Palavra

Aplicação web desenvolvida em React.js que implementa um jogo interativo
de adivinhação de palavras com sistema de pontuação, controle de
tentativas e validação automática de vitória ou derrota.

O projeto foi desenvolvido com foco na consolidação de fundamentos
essenciais do React, especialmente gerenciamento de estado, renderização
condicional e organização modular.

---

## 📋 Sobre o Projeto

O **Secret Word** é um jogo onde o usuário deve descobrir uma palavra
secreta a partir de uma categoria (dica).

A cada letra correta: - A palavra é revelada parcialmente - A pontuação
é incrementada

A cada erro: - O número de tentativas diminui

O jogo finaliza automaticamente quando: - O jogador descobre todas as
letras - Ou esgota o número de tentativas disponíveis

---

## 🚀 Funcionalidades

- Fluxo dinâmico de telas (Início → Jogo → Game Over)
- Sistema de categorias como dica
- Validação de letras (case insensitive)
- Bloqueio de repetição de letras já utilizadas
- Sistema de pontuação progressiva
- Reinício automático da partida
- Controle automático de foco no input

---

## 🧠 Conceitos React Aplicados

### Gerenciamento de Estado

Uso de `useState` para controle completo do fluxo da aplicação: - Fase
atual do jogo - Palavra selecionada - Letras corretas e incorretas -
Pontuação - Tentativas restantes

### Ciclo de Vida

`useEffect` para monitoramento automático das condições de vitória e
derrota.

### Otimização

`useCallback` para evitar recriação desnecessária de funções e melhorar
performance.

### Organização de Dados

Separação da lista de palavras em `data/words.js`, isolando regra de
negócio da interface.

---

## 🛠️ Tecnologias Utilizadas

- React 18
- JavaScript (ES6+)
- CSS Modules

---

## 📦 Instalação e Execução

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/ThhiagoCarvalho/Adivinha-a-Palavra.git
cd Adivinha-a-Palavra
```

### 2️⃣ Instalar Dependências

```bash
npm install
```

### 3️⃣ Iniciar a Aplicação

```bash
npm start
```

A aplicação será iniciada em: http://localhost:3000

---

## 📁 Estrutura do Projeto
```bash

src/
├── components/
│   ├── css/                     # Estilos específicos de componentes
│   │
│   └── front/
│       ├── PaginaInicial.jsx    # Tela inicial do jogo
│       ├── Jogo.jsx             # Tela principal com a lógica da partida
│       └── Fim.jsx              # Tela exibida ao finalizar o jogo
│
├── data/
│   └── word.js                  # Lista de palavras e categorias
│
├── App.js                       # Controle principal de estados e fluxo
├── App.css                      # Estilos globais da aplicação
├── App.test.js                  # Testes da aplicação
├── index.js                     # Ponto de entrada do React
├── index.css                    # Estilos base
├── logo.svg                     # Asset padrão do projeto
└── reportWebVitals.js           # Monitoramento de performance
```
---

## 🎯 Objetivo Técnico

Este projeto foi desenvolvido como exercício prático para aprofundamento
em:

- Sincronização entre estado e interface
- Renderização condicional
- Organização modular de aplicações SPA
- Separação entre lógica de negócio e camada visual

---

Desenvolvido por Thiago Cesar Carvalho 🚀
