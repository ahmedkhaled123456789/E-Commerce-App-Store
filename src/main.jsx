import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <ToastContainer
     theme="light"
position="top-right"
autoClose={3000}
closeOnClick
pauseOnHover={false}
 /><ToastContainer
     theme="light"
position="top-right"
autoClose={3000}
closeOnClick
pauseOnHover={false}
 />

  <App />
  </Provider>
  </BrowserRouter>
  </StrictMode>,
)
