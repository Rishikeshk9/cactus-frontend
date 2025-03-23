'use client';

import React, { useState } from 'react';
import { uploadToPinata, getIPFSGatewayURL } from '../utils/pinata';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FileUpload = ({ walletConnected }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedCID, setUploadedCID] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error('Please select a file to upload');
      return;
    }
    
    if (!walletConnected) {
      toast.error('Please connect your wallet first');
      return;
    }

    setUploading(true);
    try {
      const cid = await uploadToPinata(file);
      setUploadedCID(cid);
      setUploadedFiles([...uploadedFiles, {
        name: file.name,
        cid,
        url: getIPFSGatewayURL(cid),
        timestamp: new Date().toLocaleString()
      }]);
      toast.success('File uploaded successfully!');
      setFile(null);
    } catch (error) {
      console.error('Upload error:', error);
      toast.error(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto web3-card p-8">
      <ToastContainer 
        position="top-right" 
        autoClose={5000}
        theme="dark"
        toastClassName="!bg-gray-800 !text-white"
      />
      
      <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
        Upload Files to IPFS
      </h2>
      
      <div className="mb-6">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Select File
        </label>
        <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-purple-500 transition-colors duration-200">
          {file ? (
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-300 mb-1">{file.name}</p>
              <p className="text-gray-500 text-sm">{(file.size / 1024).toFixed(2)} KB</p>
              <button 
                onClick={() => setFile(null)}
                className="mt-2 text-xs text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-gray-400 mb-1">Drag and drop your file here, or click to browse</p>
              <p className="text-gray-600 text-sm">Supports images, videos, audio, and documents</p>
            </div>
          )}
          <input
            type="file"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={uploading}
          />
        </div>
      </div>
      
      <button
        onClick={handleUpload}
        disabled={!file || uploading || !walletConnected}
        className={`w-full py-3 px-4 font-bold rounded-lg transition-all duration-200 flex items-center justify-center ${
          !file || uploading || !walletConnected
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-900/20 transform hover:-translate-y-0.5'
        }`}
      >
        {uploading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Uploading to IPFS...
          </>
        ) : 'Upload to IPFS'}
      </button>

      {uploadedFiles.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-200">Your IPFS Files</h3>
          <div className="space-y-4">
            {uploadedFiles.map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-colors duration-200">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-gray-200">{item.name}</p>
                    <p className="text-sm text-gray-500 mt-1 font-mono">CID: {item.cid.substring(0, 18)}...{item.cid.substring(item.cid.length - 4)}</p>
                    <p className="text-xs text-gray-600 mt-1">Uploaded: {item.timestamp}</p>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm flex items-center"
                  >
                    <span>View on IPFS</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload; 