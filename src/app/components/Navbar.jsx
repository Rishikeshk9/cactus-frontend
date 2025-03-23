'use client';

import React from 'react';
import ConnectWallet from './ConnectWallet';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-black/30 border-b border-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">NFT Storage</h1>
          </Link>
          <div className="flex items-center space-x-6">
            <Link 
              href="/delegates" 
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              GPU Delegates
            </Link>
            <Link 
              href="/playground" 
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              AI Playground
            </Link>
          </div>
        </div>
        <ConnectWallet />
      </div>
    </nav>
  );
};

export default Navbar; 