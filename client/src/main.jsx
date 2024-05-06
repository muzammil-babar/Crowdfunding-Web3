'use client'
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { StateContextProvider } from './context';
import App from './App';
import './index.css';
import LoadingPlaceholder from "./components/Loading";

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
    {loading ? <LoadingPlaceholder /> : 
  <ThirdwebProvider activeChain={Sepolia}> 
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
    }
    </React.Fragment>  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Main/>);