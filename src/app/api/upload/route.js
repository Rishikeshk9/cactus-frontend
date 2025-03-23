import { NextResponse } from 'next/server';
import { uploadToPinata } from '../../utils/pinata';
import { ethers } from 'ethers';
import gpuRegistrationAbi from '../../abi/GpuRegistration.json';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      return NextResponse.json(
        { error: 'File is required' },
        { status: 400 }
      );
    }

    const cid = await uploadToPinata(file);
    return NextResponse.json({ success: true, cid });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: error.message || 'Upload failed' },
      { status: 500 }
    );
  }
} 

export async function GET() {
  try {
    // Connect to the blockchain
    const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ORCHESTRATOR_URL || 'http://3.110.255.211:8000');
    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_GPU_REGISTRATION_CONTRACT,
      gpuRegistrationAbi.abi,
      provider
    );

    // Get available GPU node
    const availableNode = await contract.getAvailableNode();
    
    if (availableNode === ethers.ZeroAddress) {
      return NextResponse.json({ 
        success: true, 
        availableGpu: null,
        message: 'No GPU nodes available at the moment'
      });
    }

    // Get GPU node details
    const nodeDetails = await contract.gpuNodes(availableNode);

    return NextResponse.json({ 
      success: true, 
      availableGpu: {
        address: availableNode,
        hardwareDetails: nodeDetails.hardwareDetails,
        isAvailable: nodeDetails.isAvailable
      }
    });
  } catch (error) {
    console.error('Error fetching available GPU:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch available GPU' },
      { status: 500 }
    );
  }
}
