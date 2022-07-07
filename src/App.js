import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Header text-center">
        Dictionary App <br />Vocabulary at your fingertips
      </div>
      
    <main>
      <Dictionary defaultKeyword="Mountain" />
    </main>

      <footer className="Footer text-center mb-10">
        This project was coded by: K. Bigham, is open-sourced on{" "}
          <a
            href="https://github.com/BighamK/kb-dictionary-app"
            target="_blank" rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://sunny-tarsier-9c2e07.netlify.app"
            target="_blank"
            rel="noreferrer"
            title="Dictionary App"
          >
            Netlify
          </a>
          </footer>
    </div>
    </div>
  );
}

//Your API key: 563492ad6f9170000100000165777f53ed7a4f8f96a4b3d05a4cada6
