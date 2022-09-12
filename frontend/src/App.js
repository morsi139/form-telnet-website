import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Admin from './Admin'
import Menu from './Menu'
function App() {
  return(
  <div className='App'>
  <Routes>
    <Route path="/Admin" element={<Admin/>}/>
    <Route path="/Menu"  element={<Menu/>} />
   </Routes>
   </div>)
  
}

export default App;
