import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { FavoritesContextProvider } from './store/favorites-context';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
      <FavoritesContextProvider>
            <BrowserRouter>
                  <App />
            </BrowserRouter>
      </FavoritesContextProvider>
);

// ReactDOM.render(
//    <BrowserRouter>
//      <App />
//    </BrowserRouter>
//     ,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

