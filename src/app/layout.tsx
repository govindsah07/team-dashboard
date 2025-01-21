import Link from 'next/link';

export const metadata = {
  title: 'Team Dashboard',
  description: 'Manage team information and tasks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-800">
        {/* Header with navigation */}
        <header className="bg-white shadow">
          <nav className="flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-bold">Team Dashboard</h1>
            <div className="flex space-x-6">
              {/* Use Link components for internal navigation */}
              <Link href="/" passHref>
                <a className="text-blue-600 hover:underline">Home</a>
              </Link>
              <Link href="/tasks" passHref>
                <a className="text-blue-600 hover:underline">Task Management</a>
              </Link>
            </div>
          </nav>
        </header>
        {/* Main content */}
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
