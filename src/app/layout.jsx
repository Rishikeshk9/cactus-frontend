import './globals.css';

export const metadata = {
  title: 'NFT Storage Apps',
  description: 'Upload and store files on IPFS with Pinata',
}; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="relative">
          {/* Background gradient orbs */}
          <div className="fixed -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="fixed top-1/3 -left-40 w-80 h-80 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="fixed -bottom-40 right-1/3 w-80 h-80 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
} 