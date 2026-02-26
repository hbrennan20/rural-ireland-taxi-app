export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 40%, #40916C 70%, #52B788 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
          <path d="M0 400 Q200 300 400 380 Q600 460 800 350 L800 600 L0 600Z" fill="#1B4332" />
          <path d="M0 450 Q150 400 350 430 Q550 460 800 410 L800 600 L0 600Z" fill="#2D6A4F" />
          <path d="M0 500 Q200 470 400 490 Q600 510 800 480 L800 600 L0 600Z" fill="#40916C" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-[#D8F3DC] text-sm">
          <span>☘️</span>
          <span>Serving Connemara &amp; West of Ireland since 2005</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Trusted Ride
          <br />
          <span className="text-[#B7E4C7]">Across the Wild West</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#D8F3DC] mb-10 max-w-2xl mx-auto leading-relaxed">
          From the shores of Roundstone to the peaks of the Twelve Bens — 
          reliable taxi service through the most beautiful roads in Ireland.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-[#FEFAE0] text-[#1B4332] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"
          >
            Book Your Ride
          </a>
          <a
            href="#fare"
            className="border-2 border-[#95D5B2] text-[#95D5B2] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#95D5B2] hover:text-[#1B4332] transition-all"
          >
            Get Fare Estimate
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">20+</div>
            <div className="text-sm text-[#B7E4C7] mt-1">Years Service</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50k+</div>
            <div className="text-sm text-[#B7E4C7] mt-1">Happy Riders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-sm text-[#B7E4C7] mt-1">Availability</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
          <path d="M0 50 Q360 0 720 50 Q1080 100 1440 50 L1440 100 L0 100Z" fill="#FEFAE0" />
        </svg>
      </div>
    </section>
  );
}
