import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Timer from './files/Timer';
import Stopwatch from './files/stopwatch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <App />
  <Timer />
  <Stopwatch />
  </>
  
);

