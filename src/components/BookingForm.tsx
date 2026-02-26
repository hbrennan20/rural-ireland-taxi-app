
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// I will also add the Card components as they are fundamental for a modern look
// This will require installing them, which I will do after writing this file.

export default function BookingForm() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passoff, setPassoff] = useState('1'); // Changed to string for input type="number"
  const [fareEstimate, setFareEstimate] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ pickup, dropoff, date, time, passengers: passoff });
    setFareEstimate('€' + (Math.random() * 50 + 20).toFixed(2)); // Mock fare
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Book Your Ride</CardTitle>
        <CardDescription>Get an instant fare estimate for your journey across rural Ireland.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="pickup">Pick-up Location</Label>
            <Input
              id="pickup"
              placeholder="e.g., Killarney Town Centre"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dropoff">Drop-off Location</Label>
            <Input
              id="dropoff"
              placeholder="e.g., Ring of Kerry Scenic Stop"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="passengers">Passengers</Label>
            <Input
              id="passengers"
              type="number"
              min="1"
              max="8"
              value={passoff}
              onChange={(e) => setPassoff(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Get Fare Estimate
          </Button>
        </form>

        {fareEstimate && (
          <div className="mt-6 text-center text-xl font-semibold text-gray-900">
            Estimated Fare: <span className="text-green-600">{fareEstimate}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
