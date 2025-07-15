import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-blue-600">ClipLinker</a>
          </Link>
          <nav className="space-x-4 text-sm text-gray-600">
            <Link href="/dashboard">
              <a className="hover:text-blue-600">Dashboard</a>
            </Link>
            <Link href="/login">
              <a className="hover:text-blue-600">Login</a>
            </Link>
            <Link href="/signup">
              <a className="hover:text-blue-600">Signup</a>
            </Link>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm py-4 mt-12">
        &copy; {new Date().getFullYear()} ClipLinker. All rights reserved.
      </footer>
    </div>
  );
}
