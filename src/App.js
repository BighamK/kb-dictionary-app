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
      <Dictionary defaultKeyword="Dog" />
    </main>

      <footer className="App-footer"><small>Coded by: K. Bigham</small> </footer>
    </div>
    </div>
  );
}

//Your API key: 563492ad6f9170000100000165777f53ed7a4f8f96a4b3d05a4cada6
