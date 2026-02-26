
"use client";

import { useState } from 'react';

export default function BookingForm() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [fareEstimate, setFareEstimate] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would call an API
    console.log({ pickup, dropoff, date, time, passengers });
    setFareEstimate('€' + (Math.random() * 50 + 20).toFixed(2)); // Mock fare
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Book Your Ride</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="pickup" className="block text-gray-700 font-medium mb-2">Pick-up Location</label>
          <input
            type="text"
            id="pickup"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder="e.g., Killarney Town Centre"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dropoff" className="block text-gray-700 font-medium mb-2">Drop-off Location</label>
          <input
            type="text"
            id="dropoff"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder="e.g., Ring of Kerry Scenic Stop"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Date</label>
            <input
              type="date"
              id="date"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Time</label>
            <input
              type="time"
              id="time"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="passengers" className="block text-gray-700 font-medium mb-2">Passengers</label>
          <input
            type="number"
            id="passengers"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            min="1"
            max="8"
            value={passengers}
            onChange={(e) => setPassengers(parseInt(e.target.value))}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700 transition duration-300"
        >
          Get Fare Estimate
        </button>
      </form>

      {fareEstimate && (
        <div className="mt-6 text-center text-xl font-bold text-gray-900">
          Estimated Fare: <span className="text-green-600">{fareEstimate}</span>
        </div>
      )}
    </div>
  );
}
