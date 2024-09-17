import './App.css';
import Menu from './Components/Navbar/Menu';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ShowProducts from './Components/ShowProducts/ShowProducts';

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
      <Route path='/Show-Products' element={<ShowProducts/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' Component={Register}/>
      <Route path='' element={<h1>NOT FOUND</h1>}/>
      <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
      </Routes>
      </Router>
    
  );
}

export default App;
