import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router';
import Coordinator from './Coordinator';
import Chairman from './Chairman';
import Login from './login';

import { BrowserRouter, Route,Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App/>}/>
      <Route path="/login" element ={<login/>}/>
      <Route path="/Chairman" element ={<Chairman/>}/>
      <Route path="/Coordinator" element ={<Coordinator/>}/>
      {/* <Route exact path="/mail" render={() => {window.location.href="/mail.html"}} /> 
      */}

      </Routes></BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
