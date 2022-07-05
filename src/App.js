import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
Vocabulary at your fingertips
      </header>
    <main>
      <Dictionary defaultKeyword="Dog" />
    </main>

      <footer className="App-footer"><small>Coded by: K. Bigham</small> </footer>
    

    </div>
    </div>
  );
}

//Your API key: 563492ad6f9170000100000165777f53ed7a4f8f96a4b3d05a4cada6
