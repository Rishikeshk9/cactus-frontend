import { ethers } from 'ethers';

export const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      throw new Error("No Ethereum wallet found. Please install MetaMask.");
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    
    return { provider, signer, address };
  } catch (error) {
    console.error("Error connecting to wallet:", error);
    throw error;
  }
};

export const checkIfWalletIsConnected = async () => {
  try {
    if (!window.ethereum) return null;
    
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts.length === 0) return null;
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return { provider, signer, address: accounts[0] };
  } catch (error) {
    console.error("Error checking wallet connection:", error);
    return null;
  }
};

export const shortenAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}; 