'use client';

import React, { useState, useEffect } from 'react';
import { connectWallet, checkIfWalletIsConnected, shortenAddress } from '../utils/web3';

const ConnectWallet = () => {
  const [walletData, setWalletData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkWallet = async () => {
      const data = await checkIfWalletIsConnected();
      setWalletData(data);
    };

    checkWallet();
    
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', checkWallet);
      window.ethereum.on('chainChanged', () => window.location.reload());
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', checkWallet);
      }
    };
  }, []);

  const handleConnect = async () => {
    setIsLoading(true);
    try {
      const data = await connectWallet();
      setWalletData(data);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      alert("Failed to connect wallet: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {walletData ? (
        <button 
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2 border border-green-700/30 shadow-lg shadow-green-900/20"
          disabled={true}
        >
          <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
          <span>{shortenAddress(walletData.address)}</span>
        </button>
      ) : (
        <button 
          onClick={handleConnect} 
          disabled={isLoading}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg shadow-purple-900/20 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Connecting...</span>
            </div>
          ) : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
};

export default ConnectWallet; 