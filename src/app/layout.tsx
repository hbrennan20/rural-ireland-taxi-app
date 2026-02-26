
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../app/globals.css'; // Ensure Tailwind CSS is imported

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rural Ireland Taxi Booking',
  description: 'Book your taxi for rural Ireland with ease.',
};

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " antialiased"}>{children}</body>
    </html>
  );
}
