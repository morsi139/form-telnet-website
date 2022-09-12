import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Formulaire from './Formulaire';
import Admin from './Admin';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <App/>
    </BrowserRouter>
  // <React.StrictMode>
  //  <App/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <BrowserRouter>
      
<Route path="/Admin">
<Admin/>
</Route>
<Route path="/fromulaire">
<Formulaire></Formulaire>
</Route>

</BrowserRouter> */}