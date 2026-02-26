
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-green-800 text-white p-4 text-center mt-8">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Rural Ireland Taxi. All rights reserved.</p>
        <p>Designed with care for the Irish countryside.</p>
      </div>
    </footer>
  );
}
