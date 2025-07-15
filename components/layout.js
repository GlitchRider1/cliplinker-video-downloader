import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <a className="text-xl font-bold text-blue-600">ClipLinker</a>
          </Link>
          <div className="space-x-6">
            <Link href="/"><a className="text-gray-700 hover:text-blue-600">Home</a></Link>
            <Link href="/dashboard"><a className="text-gray-700 hover:text-blue-600">Dashboard</a></Link>
            <Link href="/premium"><a className="text-gray-700 hover:text-blue-600">Premium</a></Link>
            <Link href="/features"><a className="text-gray-700 hover:text-blue-600">Features</a></Link>
            <Link href="/about"><a className="text-gray-700 hover:text-blue-600">About</a></Link>
            <Link href="/contact"><a className="text-gray-700 hover:text-blue-600">Contact</a></Link>
          </div>
        </div>
      </nav>
      <main className="flex-grow max-w-7xl mx-auto p-4">
        {children}
      </main>
      <footer className="bg-white text-center py-4 mt-auto text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} ClipLinker. All rights reserved.
      </footer>
    </div>
  );
}
