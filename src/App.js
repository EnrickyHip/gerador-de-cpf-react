import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GERAR / VALIDAR CPF</h1>
      </header>
      <main className="App-main">

        <form>

          <div className='flex'>
            <input className='full-input'></input>
            <button type="button" className='btn'>Gerar CPF</button>
            <button type="button" className='btn'>Validar CPF</button>
          </div>

        </form>

      </main>

      <footer>
        <p>by: Enricky Hipólito</p>
      </footer>
    </div>
  );
}

export default App;
