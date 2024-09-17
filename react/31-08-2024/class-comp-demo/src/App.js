import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import AddDish from './components/AddDish/AddDish';
import ShowDish from './components/ShowDish/ShowDish';
function App() {
  return (
    <div className="App">
      <Header/>
      <AddDish name="biryani"/>
    </div>
  );
}

export default App;
