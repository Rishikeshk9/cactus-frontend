export const uploadToPinata = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const metadata = JSON.stringify({
      name: file.name,
    });
    formData.append("pinataMetadata", metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    });
    formData.append("pinataOptions", options);

    const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error uploading to Pinata: ${response.statusText}`);
    }

    const result = await response.json();
    return result.IpfsHash; // This is the CID hash we store in the smart contract
  } catch (error) {
    console.error("Error uploading to Pinata:", error);
    throw error;
  }
};

export const getIPFSGatewayURL = (cid, filename) => {
  return `https://gateway.pinata.cloud/ipfs/${cid}${filename ? `/${filename}` : ''}`;
}; 