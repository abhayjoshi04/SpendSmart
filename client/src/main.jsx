import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "antd/dist/reset.css";
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
//import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)


// Optional: if you want to measure performance, uncomment and use this
// reportWebVitals(console.log);
//reportWebVitals();