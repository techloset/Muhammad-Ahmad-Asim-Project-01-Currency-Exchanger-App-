import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import IndividualCurrency from './pages/IndividualCurrency';
import CurrencyPairs from './pages/CurrencyPairs';
import Cad from './pages/Cad';
import Aud from './pages/Home/Aud';
import Cnh from './pages/Cnh';
import Eur from './pages/Eur';
import Sgd from './pages/Sgd';
import Nzd from './pages/Nzd';
import Jpy from './pages/Jpy';
import Hkd from './pages/Hkd';
import Gbp from './pages/Gbp';
import Gpp from './pages/Gpp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/IndividualCurrency",
    element: <IndividualCurrency/>
  },
  {
    path: "/CurrencyPairs",
    element: <CurrencyPairs/>
  },
  {
    path: "/Cad",
    element: <Cad/>
  },
  {
    path: "/Aud",
    element: <Aud/>
  },
  {
    path: "/Cnh",
    element: <Cnh/>
  },
  {
    path: "/Eur",
    element: <Eur/>
  },
   

  {
    path: "/Sgd",
    element: <Sgd/>
  },
  {
    path: "/Nzd",
    element: <Nzd/>
  },
  {
    path: "/Jpy",
    element: <Jpy/>
  },
  {
    path: "/Hkd",
    element: <Hkd/>
  },
  {
    path: "/Gbp",
    element: <Gbp/>
  },
  {
    path: "/Gpp",
    element: <Gpp/>
  },
]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
