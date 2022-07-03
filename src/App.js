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

      <footer className="text-center"> Coded by: K. Bigham </footer>
    

    </div>
    </div>
  );
}


