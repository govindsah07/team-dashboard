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
        <header className="bg-white shadow">
          <nav className="flex items-center justify-between px-4 py-2">
            <h1 className="text-xl font-bold">Team Dashboard</h1>
            <div className="flex space-x-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/tasks" className="hover:underline">
                Task Management
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
