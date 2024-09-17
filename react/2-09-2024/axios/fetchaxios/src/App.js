import logo from './logo.svg';
import './App.css';
import AddStock from './components/AddStock';
import ShowStock from './components/ShowStocks';

function App() {
  return (
    <div className="App">
      <AddStock/>
      <ShowStock/>
    </div>
  );
}

export default App;
