'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Playground() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-green-400">🌵 Cactus</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/playground#overview" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Overview
                </Link>
                <Link href="/playground#setup" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Setup
                </Link>
                <Link href="/playground#protocol" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Protocol
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Get Started with Cactus
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Choose your path to join the decentralized GPU network
            </p>
          </div>

          {/* Two Paths Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Orchestrator Path */}
            <div className="bg-gray-900 rounded-lg p-8 border border-green-500/20 hover:border-green-500/40 transition-colors">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white">🎮 GPU Orchestrator</h2>
                  <p className="mt-2 text-gray-300">Share your GPU power and earn rewards</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-400">What you'll get:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Earn blockchain rewards for sharing GPU resources</li>
                    <li>Automatic resource management and scaling</li>
                    <li>Real-time monitoring and analytics</li>
                    <li>Secure and encrypted connections</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-400">Requirements:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>NVIDIA GPU with CUDA support</li>
                    <li>Stable internet connection</li>
                    <li>Windows or Linux OS</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Link
                    href="/playground#setup"
                    className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-400 hover:bg-green-500 transition-colors"
                  >
                    Setup Orchestrator →
                  </Link>
                </div>
              </div>
            </div>

            {/* API User Path */}
            <div className="bg-gray-900 rounded-lg p-8 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white">🚀 API Integration</h2>
                  <p className="mt-2 text-gray-300">Use GPU power in your applications</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">Available Models:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Stable Diffusion 1.5 for image generation</li>
                    <li>COVID-19 X-Ray Analysis</li>
                    <li>More models coming soon!</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">Features:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Simple REST API integration</li>
                    <li>Pay-as-you-go pricing</li>
                    <li>High availability and scalability</li>
                    <li>Comprehensive documentation</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Link
                    href="/playground#api"
                    className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-blue-400 hover:bg-blue-500 transition-colors"
                  >
                    View API Docs →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            {/* Orchestrator Setup Section */}
            <div id="setup" className="bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Orchestrator Setup Guide</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">1. Install Ngrok</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <p className="text-gray-300 mb-4">
                      First, install Ngrok from their official website. Ngrok is required to create a public URL for your GPU client.
                    </p>
                    <a 
                      href="https://ngrok.com/download" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-green-400 hover:text-green-300 underline"
                    >
                      Download Ngrok → ngrok.com/download
                    </a>
                    <p className="text-gray-300 mt-4">
                      After installation, sign up for a free account and follow their setup instructions to authenticate your ngrok client.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">2. Download Cactus Client</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <p className="text-gray-300 mb-4">
                      Download the latest release of Cactus client from our GitHub releases page:
                    </p>
                    <a 
                      href="https://github.com/Rishikeshk9/cactus/releases" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-green-400 hover:text-green-300 underline"
                    >
                      Download Latest Release → github.com/Rishikeshk9/cactus/releases
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">3. Extract and Run</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <p className="text-gray-300 mb-4">
                      1. Extract the downloaded zip file to your preferred location<br/>
                      2. Open a terminal or command prompt in the extracted folder<br/>
                      3. Run the client using the following command:
                    </p>
                    <pre className="text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">
                      <code>{`cactus-client.exe client --server-url http://3.110.255.211:8001`}</code>
                    </pre>
                    <p className="text-gray-300 mt-4">
                      The client will automatically start ngrok and connect to the server. You should see output indicating successful connection.
                      To stop the client, press Ctrl+C.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* API Documentation Section */}
            <div id="api" className="bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">API Documentation</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Base URL</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <pre className="text-gray-300 overflow-x-auto">
                      <code>{`const BASE_URL = 'http://3.110.255.211:8001'`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Authentication</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <p className="text-gray-300">
                      API access requires an API key. Contact us to get your API key for development or production use.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Available Endpoints</h3>
                  <div className="space-y-6">
                    {/* Stable Diffusion Endpoint */}
                    <div className="bg-gray-800 rounded-lg p-6">
                      <h4 className="text-lg font-medium text-white mb-2">Image Generation (Stable Diffusion)</h4>
                      <pre className="text-gray-300 overflow-x-auto mb-4">
                        <code>{`POST /predict

Request Body:
{
  "model_type": "stable_diffusion",
  "model_cid": "hf:runwayml/stable-diffusion-v1-5",
  "prompt": "your prompt here",
  "quality_preset": "Balanced"
}

Response:
{
  "success": true,
  "prompt": "your prompt here",
  "generation_time_ms": 2483.16,
  "parameters": {
    "num_inference_steps": 30.0,
    "guidance_scale": 8.5
  },
  "timestamp": "20250323_183906",
  "image_base64": "base64_encoded_image_data",
  "error": null
}`}</code>
                      </pre>
                      <p className="text-gray-300">
                        The quality_preset parameter can be set to "Balanced" for optimal performance. The response includes the generated image in base64 format and generation metrics.
                      </p>
                    </div>

                    {/* COVID X-Ray Endpoint */}
                    <div className="bg-gray-800 rounded-lg p-6">
                      <h4 className="text-lg font-medium text-white mb-2">COVID X-Ray Analysis</h4>
                      <pre className="text-gray-300 overflow-x-auto mb-4">
                        <code>{`POST /predict

Request Body:
{
  "model_type": "covid_xray",
  "model_cid": "QmQkthDJHf3ssBSiBHgwzMVShD5v47rPzVrbjBVHjMLN19",
  "image_url": "https://example.com/xray-image.jpg",
  "callback_url": "https://your-webhook-url.com/callback"
}

Response:
{
  "success": true,
  "prompt": null,
  "generation_time_ms": 245.28,
  "parameters": {
    "normal": 31.98,
    "pneumonia": 64.16,
    "covid-19": 3.87
  },
  "timestamp": "20250323_184344",
  "image_base64": null,
  "error": null
}`}</code>
                      </pre>
                      <p className="text-gray-300">
                        The response includes probability scores for different conditions (normal, pneumonia, and COVID-19). The callback_url is optional and can be used to receive asynchronous results.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Example Integration</h3>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <pre className="text-gray-300 overflow-x-auto">
                      <code>{`// Example using JavaScript/TypeScript

// Generate image using Stable Diffusion
async function generateImage(prompt) {
  const response = await fetch('http://3.110.255.211:8001/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      model_type: 'stable_diffusion',
      model_cid: 'hf:runwayml/stable-diffusion-v1-5',
      prompt: prompt,
      quality_preset: 'Balanced'
    })
  });

  const result = await response.json();
  return result;
}

// Analyze X-Ray image
async function analyzeXRay(imageUrl, callbackUrl) {
  const response = await fetch('http://3.110.255.211:8001/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      model_type: 'covid_xray',
      model_cid: 'QmQkthDJHf3ssBSiBHgwzMVShD5v47rPzVrbjBVHjMLN19',
      image_url: imageUrl,
      callback_url: callbackUrl // Optional
    })
  });

  const result = await response.json();
  return result;
}

// Usage examples
async function examples() {
  // Generate an image
  const imageResult = await generateImage('A beautiful sunset over mountains');
  console.log('Generated image:', imageResult);

  // Analyze an X-Ray
  const xrayResult = await analyzeXRay(
    'https://example.com/xray-image.jpg',
    'https://your-webhook-url.com/callback' // Optional
  );
  console.log('X-Ray analysis:', xrayResult);
}`}</code>
                    </pre>
                    <p className="text-gray-300 mt-4">
                      The examples show how to integrate both Stable Diffusion and COVID X-Ray analysis into your applications. The callback_url is optional for X-Ray analysis and can be used to receive asynchronous results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Link
              href="https://github.com/Rishikeshk9/cactus.git"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 