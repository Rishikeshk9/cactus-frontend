'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-400">🌵 Cactus</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </Link>
                <Link href="#benefits" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Benefits
                </Link>
                <Link href="#how-it-works" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  How It Works
                </Link>
                <Link href="/playground" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Try It Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Distributed GPU Computing</span>
              <span className="block text-green-400">Made Simple</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Access powerful GPU resources from anywhere. Run AI models, process data, and accelerate your computations without the complexity.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/playground" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10">
                  Get Started
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link href="#how-it-works" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-400 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Everything you need to run AI models efficiently
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="text-green-400 text-2xl mb-4">🌐</div>
              <h3 className="text-lg font-medium text-white">Distributed Computing</h3>
              <p className="mt-2 text-gray-300">
                Access GPU resources from anywhere in the world through our secure network.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="text-green-400 text-2xl mb-4">⚡</div>
              <h3 className="text-lg font-medium text-white">Dynamic Scaling</h3>
              <p className="mt-2 text-gray-300">
                Automatically find and use the best available GPU for your tasks.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="text-green-400 text-2xl mb-4">🛡️</div>
              <h3 className="text-lg font-medium text-white">Reliable & Secure</h3>
              <p className="mt-2 text-gray-300">
                Built-in fault tolerance and secure connections for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why Choose Cactus?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              The smart choice for GPU computing
            </p>
          </div>
          <div className="mt-12">
            <div className="space-y-10">
              {/* Benefit 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    💰
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Cost-Effective</h3>
                  <p className="mt-2 text-gray-300">
                    Only pay for the GPU resources you actually use, without the overhead of maintaining your own infrastructure.
                  </p>
                </div>
              </div>
              {/* Benefit 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    🚀
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Easy to Use</h3>
                  <p className="mt-2 text-gray-300">
                    Simple API and intuitive interface make it easy to integrate into your existing applications.
                  </p>
                </div>
              </div>
              {/* Benefit 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    🔄
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Always Available</h3>
                  <p className="mt-2 text-gray-300">
                    Our distributed network ensures high availability and reliability for your GPU computing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              How Cactus Works
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Simple, efficient, and powerful distributed computing
            </p>
          </div>
          
          <div className="mt-12">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-500/20"></div>

              {/* Step 1 */}
              <div className="relative mb-12">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-1/2 pr-8 text-right">
                    <div className="bg-gray-900 rounded-lg p-6">
                      <div className="text-green-400 text-2xl mb-4">1️⃣</div>
                      <h3 className="text-lg font-medium text-white">Client Registration</h3>
                      <p className="mt-2 text-gray-300">
                        GPU providers register their machines with Cactus, sharing their capabilities and available resources.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-1/2 pl-8">
                    <div className="bg-gray-900 rounded-lg p-6">
                      <div className="text-green-400 text-2xl mb-4">2️⃣</div>
                      <h3 className="text-lg font-medium text-white">Resource Discovery</h3>
                      <p className="mt-2 text-gray-300">
                        The system maintains a real-time registry of available GPUs and their capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-12">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-1/2 pr-8 text-right">
                    <div className="bg-gray-900 rounded-lg p-6">
                      <div className="text-green-400 text-2xl mb-4">3️⃣</div>
                      <h3 className="text-lg font-medium text-white">Task Submission</h3>
                      <p className="mt-2 text-gray-300">
                        Users submit their AI tasks through our simple API or web interface.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-1/2 pl-8">
                    <div className="bg-gray-900 rounded-lg p-6">
                      <div className="text-green-400 text-2xl mb-4">4️⃣</div>
                      <h3 className="text-lg font-medium text-white">Smart Allocation</h3>
                      <p className="mt-2 text-gray-300">
                        Our system automatically matches tasks with the most suitable GPU based on requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-1/2 pr-8 text-right">
                    <div className="bg-gray-900 rounded-lg p-6">
                      <div className="text-green-400 text-2xl mb-4">5️⃣</div>
                      <h3 className="text-lg font-medium text-white">Task Execution</h3>
                      <p className="mt-2 text-gray-300">
                        Tasks are executed on the allocated GPU with real-time monitoring and progress updates.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-1/2 pl-8">
                    <div className="bg-gray-900 rounded-lg p-6">
                      <div className="text-green-400 text-2xl mb-4">6️⃣</div>
                      <h3 className="text-lg font-medium text-white">Result Delivery</h3>
                      <p className="mt-2 text-gray-300">
                        Results are securely delivered back to the user, with automatic cleanup of resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System Architecture */}
          <div className="mt-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">System Architecture</h3>
              <p className="mt-4 text-gray-300">
                Built with modern technologies for reliability and scalability
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="text-green-400 text-2xl mb-4">🔒</div>
                <h4 className="text-lg font-medium text-white">Secure Communication</h4>
                <p className="mt-2 text-gray-300">
                  End-to-end encryption and secure protocols for data transfer
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="text-green-400 text-2xl mb-4">⚡</div>
                <h4 className="text-lg font-medium text-white">Real-time Updates</h4>
                <p className="mt-2 text-gray-300">
                  WebSocket connections for live status and progress updates
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="text-green-400 text-2xl mb-4">🔄</div>
                <h4 className="text-lg font-medium text-white">Fault Tolerance</h4>
                <p className="mt-2 text-gray-300">
                  Automatic failover and task redistribution on failures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-green-400">Start using Cactus today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/playground" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              Built with ❤️ for the AI community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 