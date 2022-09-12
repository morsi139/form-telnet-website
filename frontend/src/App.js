
import './App.css';
import { Route, Routes } from 'react-router';
import Admin from './Admin';
import Formulaire from './Formulaire';

function App() {

    return (
       <div className='App'>
        <Routes>
          <Route path="/Admin" element={<Admin/>}/>
         <Route path="/Formulaire"  element={<Formulaire/>} />
         </Routes>
         </div>
    );
}

export default App;
