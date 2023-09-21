import logo from './logo.svg';
import './App.css';
import { Header } from "./header/header";
import { Main } from './main/main'
import { DataFetching} from './hooks/hooks.js'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
