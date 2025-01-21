export const metadata = {
  title: "Team Dashboard",
  description: "Manage team information and tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-800">
        <header className="bg-blue-500 text-white p-4">
          <nav className="flex justify-between items-center max-w-4xl mx-auto">
            <h1 className="text-xl font-bold">Team Dashboard</h1>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/tasks" className="hover:underline">
                  Task Management
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
