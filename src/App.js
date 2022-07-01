import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>Hello</p>
      </header>
    
      <form>
                <div className="row">
                    <div className="col-9">
                        <input
                        type="search"
                        placeholder="Type in your word..."
                        className="form-control"
                        autoFocus="on"
                        />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </div>
            </form>
    </div>
  );
}

export default App;
