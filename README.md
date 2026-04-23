# 📚 EpiBooks

Piccola applicazione realizzata con **React + Vite** per mostrare un catalogo di libri attraverso componenti riutilizzabili e uno stile basato su **React-Bootstrap**.

## ✨ Cosa ho realizzato

- Una **navbar** con il nome del progetto e i link principali
- Un componente **Welcome** con messaggio di benvenuto
- Un componente **AllTheBooks** che mostra una lista di libri in griglia
- Un componente **SingleBook** per visualizzare ogni libro come card
- Un **footer** semplice e coerente con il layout
- L'integrazione dei dati dei libri da file **JSON**

## 🧩 Struttura del progetto

```text
src/
├── books/
│   ├── fantasy.json
│   ├── history.json
│   ├── horror.json
│   ├── romance.json
│   └── scifi.json
├── components/
│   ├── AllTheBooks/
│   ├── MyFooter.jsx/
│   ├── MyNav.jsx/
│   ├── SingleBook/
│   └── Welcome/
├── App.jsx
├── index.css
└── main.jsx
```

## 🛠️ Tecnologie usate

- **React**
- **Vite**
- **Bootstrap**
- **React-Bootstrap**
- **JavaScript**
- **JSON**

## 📖 Componenti principali

### `MyNav`
Gestisce la barra di navigazione superiore con brand e link.

### `Welcome`
Mostra un alert di benvenuto all'utente.

### `AllTheBooks`
Importa i libri dal file `fantasy.json` e li renderizza in una griglia responsive.

### `SingleBook`
Riceve un libro tramite `props` e mostra:

- copertina
- titolo
- prezzo

### `MyFooter`
Mostra il footer finale della pagina.

## 🚀 Come avviare il progetto

```bash
npm install
npm run dev
```

Poi apri il progetto nel browser all'indirizzo mostrato da Vite.

## 📦 Comandi utili

```bash
npm run dev
npm run build
npm run preview
```

## 🎯 Obiettivo del progetto

L'obiettivo è costruire una piccola interfaccia React suddivisa in componenti, imparando a:

- organizzare il codice in modo modulare
- passare dati tramite `props`
- usare file JSON come sorgente dati
- creare layout responsive con React-Bootstrap

## 🔍 Stato attuale

Al momento l'app:

- mostra la navbar
- visualizza il messaggio di benvenuto
- stampa i libri fantasy in una griglia
- mostra il footer in fondo alla pagina

