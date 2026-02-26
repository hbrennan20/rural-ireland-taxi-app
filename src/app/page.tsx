
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto p-4 flex flex-col items-center justify-center">
        <section className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-green-800 mb-4">Rural Ireland Taxi</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Your reliable and friendly taxi service for exploring the beautiful countryside of Ireland.
            Book your ride with ease, wherever your journey takes you.
          </p>
        </section>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
