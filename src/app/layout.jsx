import './globals.css';

export const metadata = {
  title: 'Cactus',
  description: 'Democratizing AI Computing',
  icons: {
    icon: '/cactus.ico',
    shortcut: '/cactus.ico',
    apple: '/cactus.ico',
  },
}; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="relative">
          {/* Animated background gradient orbs */}
          <div className="fixed -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="fixed top-1/3 -left-40 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
          <div className="fixed -bottom-40 right-1/3 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse delay-2000"></div>
          
          {/* Grid pattern overlay */}
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
} 