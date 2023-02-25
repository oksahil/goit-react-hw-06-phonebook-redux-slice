import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store} from "./components/redux/store.js";
// import { PersistGate } from "redux-persist/integration/react";

import { App } from './App'

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter basename="/goit-react-hw-06-phonebook">
      
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <App />
          {/* </PersistGate> */}
        
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);