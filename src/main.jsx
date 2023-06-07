import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingCartContext.jsx';
import { ProductListProvider } from './context/ProductListContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductListProvider>
      <ShoppingCartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ShoppingCartProvider>
    </ProductListProvider>
  </React.StrictMode>
);
