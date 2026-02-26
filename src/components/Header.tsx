
export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">Rural Ireland Taxi</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300 transition-colors">About</a></li>
            <li><a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
