
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
        <section className="text-center mb-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight">
            Your Ride Across <span className="text-green-600 dark:text-green-400">Rural Ireland</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Reliable and comfortable taxi services, wherever your journey takes you on the Emerald Isle.
            Get an instant fare estimate and book with ease.
          </p>
        </section>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
