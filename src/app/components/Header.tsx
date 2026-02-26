"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B4332]/95 backdrop-blur-sm border-b border-[#2D6A4F]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">🚕</span>
            <span className="text-xl font-bold text-[#FEFAE0]">
              Connemara<span className="text-[#95D5B2]">Cabs</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[#D8F3DC] hover:text-white transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#booking" className="text-[#D8F3DC] hover:text-white transition-colors text-sm font-medium">
              Book a Ride
            </a>
            <a href="#fare" className="text-[#D8F3DC] hover:text-white transition-colors text-sm font-medium">
              Fare Estimate
            </a>
            <a href="#about" className="text-[#D8F3DC] hover:text-white transition-colors text-sm font-medium">
              About
            </a>
            <a
              href="tel:+353910000000"
              className="bg-[#95D5B2] text-[#1B4332] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#B7E4C7] transition-colors"
            >
              Call Now
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#D8F3DC] p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-[#2D6A4F]/50 mt-2 pt-4 flex flex-col gap-3">
            <a href="#home" className="text-[#D8F3DC] hover:text-white transition-colors text-sm font-medium">Home</a>
            <a href="#booking" className="text-[#D8F3DC] hover:text-white transition-colors text-sm font-medium">Book a Ride</a>
            <a href="#fare" className="text-[#D8F3DC] hover:text-white transition-colors text-sm font-medium">Fare Estimate</a>
            <a href="#about" className="text-[#D8F3DC] hover:text-white transition-colors text-sm font-medium">About</a>
            <a
              href="tel:+353910000000"
              className="bg-[#95D5B2] text-[#1B4332] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#B7E4C7] transition-colors text-center"
            >
              Call Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
