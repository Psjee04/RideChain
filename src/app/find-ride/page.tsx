'use client';

import Navbar from "@/components/Navbar";
import Link from 'next/link';

export default function FindRide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/60 via-purple-50/70 to-indigo-100/60 dark:from-slate-900 dark:via-gray-800/90 dark:to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 md:px-8 py-28 pt-56 md:pt-64 animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-50 mb-6">
              Find a <span className="text-blue-600 dark:text-blue-400">Ride</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Search for available rides that match your schedule
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="from" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    From
                  </label>
                  <input
                    type="text"
                    id="from"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter pickup location"
                  />
                </div>

                <div>
                  <label htmlFor="to" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    To
                  </label>
                  <input
                    type="text"
                    id="to"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter destination"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="seats" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Number of Seats
                  </label>
                  <input
                    type="number"
                    id="seats"
                    min="1"
                    max="7"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Number of seats needed"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-lg font-medium text-white bg-blue-600 border-2 border-blue-600 rounded-lg shadow-sm hover:bg-blue-700 dark:bg-blue-500 dark:border-blue-500 dark:hover:bg-blue-600 transition-colors"
                >
                  Search Rides
                </button>
              </div>
            </form>
          </div>

          {/* Available Rides */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Available Rides
            </h2>

            {/* Sample Ride Cards */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">From:</span>
                    <span className="text-gray-800 dark:text-gray-100">Main Campus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">To:</span>
                    <span className="text-gray-800 dark:text-gray-100">Engineering Building</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Time:</span>
                    <span className="text-gray-800 dark:text-gray-100">9:00 AM</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    0.5 SOL
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    3 seats available
                  </div>
                  <Link href="/connect" legacyBehavior>
                    <a className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
                      Book Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* More sample rides can be added here */}
          </div>

          {/* Quick Links */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Need help? Check out our resources:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/safety-tips" legacyBehavior>
                <a className="text-blue-600 dark:text-blue-400 hover:underline">Safety Tips</a>
              </Link>
              <Link href="/how-it-works" legacyBehavior>
                <a className="text-blue-600 dark:text-blue-400 hover:underline">How It Works</a>
              </Link>
              <Link href="/help-center" legacyBehavior>
                <a className="text-blue-600 dark:text-blue-400 hover:underline">Help Center</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 