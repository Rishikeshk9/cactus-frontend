'use client';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Navbar from '../components/Navbar';
import gpuRegistrationAbi from '../abi/GpuRegistration.json';

export default function DelegatesAdmin() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [hardwareDetails, setHardwareDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [registeredGpus, setRegisteredGpus] = useState([]);
  const [hasRegisteredNode, setHasRegisteredNode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const checkWallet = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setWalletConnected(accounts.length > 0);
      }
    };

    checkWallet();
    
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        setWalletConnected(accounts.length > 0);
      });
    }
  }, []);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletConnected(true);
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setError('Failed to connect wallet');
    }
  };

  const checkUserRegisteredNode = async (userAddress) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_GPU_REGISTRATION_CONTRACT,
        gpuRegistrationAbi.abi,
        provider
      );
      console.log(userAddress);
      // Check if user has any registered nodes
      const hasNode = await contract.gpuNodes(userAddress);
      console.log(hasNode.nodeAddress );
      if(hasNode.nodeAddress === userAddress){
      setHasRegisteredNode(true);
      }
    } catch (err) {
      console.error('Error checking registered node:', err);
      setHasRegisteredNode(false);
    }
  };

  const registerGpu = async () => {
    if (!hardwareDetails.trim()) {
      setError('Please enter hardware details');
      return;
    }

    if (hasRegisteredNode) {
      setError('You have already registered a GPU node');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_GPU_REGISTRATION_CONTRACT,
        gpuRegistrationAbi.abi,
        signer
      );

      const tx = await contract.registerNode(hardwareDetails);
      await tx.wait();
      
      setSuccess('GPU registered successfully!');
      setHardwareDetails('');
      setHasRegisteredNode(true);
      fetchRegisteredGpus();
    } catch (err) {
      setError(err.message || 'Failed to register GPU');
      console.error('Error registering GPU:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchRegisteredGpus = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_GPU_REGISTRATION_CONTRACT,
        gpuRegistrationAbi.abi,
        provider
      );

      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();

      // Get all registered nodes
      const nodes = [];
       
        const nodeDetails = await contract.gpuNodes(userAddress);
        if (userAddress.toLowerCase() === userAddress.toLowerCase()) {
          nodes.push({
            address: nodeDetails.nodeAddress,
            hardwareDetails: nodeDetails.hardwareDetails,
            isAvailable: nodeDetails.isAvailable
          });
        } 

      setRegisteredGpus(nodes);
      setTotalPages(Math.ceil(nodes.length / itemsPerPage));
    } catch (err) {
      console.error('Error fetching registered GPUs:', err);
    }
  };

  useEffect(() => {
    if (walletConnected) {
      const checkUser = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        await checkUserRegisteredNode(userAddress);
        await fetchRegisteredGpus();
      };
      checkUser();
    }
  }, [walletConnected]);

  const paginatedGpus = registeredGpus.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main>
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          GPU Delegate Admin
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Register and manage your GPU nodes for the decentralized network.
        </p>

        {!walletConnected ? (
          <div className="max-w-md mx-auto text-center">
            <button
              onClick={connectWallet}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Connect Wallet
            </button>
            <p className="mt-4 text-gray-400">
              Connect your wallet to register and manage your GPU nodes.
            </p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {!hasRegisteredNode && (
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 text-purple-400">Register New GPU</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Hardware Details
                    </label>
                    <textarea
                      value={hardwareDetails}
                      onChange={(e) => setHardwareDetails(e.target.value)}
                      placeholder="Enter GPU specifications, memory, etc..."
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                      rows="4"
                    />
                  </div>
                  <button
                    onClick={registerGpu}
                    disabled={loading}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Registering...' : 'Register GPU'}
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg mb-6">
                {success}
              </div>
            )}

            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-purple-400">Your Registered GPUs</h2>
              {registeredGpus.length === 0 ? (
                <p className="text-gray-400 text-center py-4">No GPUs registered yet.</p>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {paginatedGpus.map((gpu, index) => (
                      <div
                        key={index}
                        className="bg-gray-700 rounded-lg p-4 border border-gray-600"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-medium text-purple-400">GPU {index + 1}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            gpu.isAvailable
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {gpu.isAvailable ? 'Available' : 'In Use'}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm text-gray-400">Address</p>
                            <p className="text-sm font-mono break-all">{gpu.address}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Hardware Details</p>
                            <p className="text-sm">{gpu.hardwareDetails}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-6 space-x-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
                      >
                        Previous
                      </button>
                      <span className="px-4 py-2 text-gray-400">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 