import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const el = () => {
  return (window.innerWidth > 900 ? (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    ) : (<h2><center>Website is available for only desktop.</center></h2>));  
  }

ReactDOM.render(el(),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
