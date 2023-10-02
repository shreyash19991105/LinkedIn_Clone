import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {
  
  RouterProvider,
} from "react-router-dom";
import {router} from './routes';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   <ToastContainer/>
  </React.StrictMode>,
)
