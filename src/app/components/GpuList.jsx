'use client';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import gpuRegistrationAbi from '../abi/GpuRegistration.json';

export default function GpuList() {
  const [gpuNodes, setGpuNodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAvailableGpuNodes = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(
          process.env.NEXT_PUBLIC_GPU_REGISTRATION_CONTRACT,
          gpuRegistrationAbi.abi,
          provider
        );

        // Get available node
        const availableNode = await contract.getAvailableNode();
        
        if (availableNode === ethers.constants.AddressZero) {
          setGpuNodes([]);
          setLoading(false);
          return;
        }

        // Get node details
        const nodeDetails = await contract.gpuNodes(availableNode);
        
        setGpuNodes([{
          address: availableNode,
          hardwareDetails: nodeDetails.hardwareDetails,
          isAvailable: nodeDetails.isAvailable
        }]);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching available GPU nodes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableGpuNodes();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
        <p className="mt-4 text-gray-400">Loading available GPU nodes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        <p>Error loading available GPU nodes: {error}</p>
      </div>
    );
  }

  if (gpuNodes.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p>No GPU nodes available at the moment</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gpuNodes.map((node, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-colors"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-purple-400">Available GPU Node</h3>
            <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">
              Available
            </span>
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-400">Address</p>
              <p className="text-sm font-mono break-all">{node.address}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Hardware Details</p>
              <p className="text-sm">{node.hardwareDetails}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 