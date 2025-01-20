import './globals.css';

export const metadata = {
  title: 'Responsive CRUD App',
  description: 'A responsive CRUD application with proper CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <a href="/">Team Dashboard</a>
        </div>
        {children}
      </body>
    </html>
  );
}
