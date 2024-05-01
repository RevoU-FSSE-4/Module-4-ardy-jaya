import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// async function handleSubmit(e:any){e.preventDefault();
//   const body = { "name":name,"email": email,"password": password };
//   const option = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
// }

// try {
//   const response = await fetch('https://library-crud-sample.vercel.app/api/user/register', option);
//   if (!response.ok) {
//   throw new Error('An error occurred');
//   }
//   const data = await response.json();
//   console.log(data);
//   setTimeout(() => {
//     alert('Account created successfully');
//     navigate('/insideLogin');
//     1000});