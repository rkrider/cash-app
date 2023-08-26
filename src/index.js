import React from 'react';
import ReactDOM from 'react-dom/client';
import "./fonts/Agrandir-GrandHeavy.otf";
import "./fonts/Agrandir-GrandLight.otf";
import "./fonts/Agrandir-Narrow.otf";
import "./fonts/Agrandir-Regular.otf";
import "./fonts/Agrandir-TextBold.otf";
import "./fonts/Agrandir-ThinItalic.otf";
import "./fonts/Agrandir-Tight.otf";
import "./fonts/Agrandir-WideBlackItalic.otf";
import "./fonts/Agrandir-WideLight.otf";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
