
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 text-white p-4 text-center mt-12 sm:mt-16">
      <div className="container mx-auto text-sm text-gray-400">
        <p>&copy; {currentYear} Rural Ireland Taxi. All rights reserved.</p>
        <p className="mt-1">Connecting communities across the Emerald Isle.</p>
      </div>
    </footer>
  );
}
