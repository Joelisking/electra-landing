// app/vote/page.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function VotePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Optional: Set a target date for when voting begins
  // Uncomment and set your date
  // const targetDate = new Date('2025-12-01T00:00:00');

  useEffect(() => {
    // Optional countdown timer
    // const timer = setInterval(() => {
    //   const now = new Date().getTime();
    //   const distance = targetDate.getTime() - now;
    //
    //   if (distance > 0) {
    //     setTimeLeft({
    //       days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    //       hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    //       minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    //       seconds: Math.floor((distance % (1000 * 60)) / 1000)
    //     });
    //   }
    // }, 1000);
    //
    // return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Simple Navigation */}
      <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-white text-xl font-bold">
                Electra
              </span>
            </Link>

            <Link
              href="/"
              className="text-white hover:text-blue-200 transition-colors flex items-center">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Voting Begins Soon
          </h1>

          <p className="text-xl text-blue-100 text-center mb-8">
            No active elections at the moment
          </p>

          {/* Info Box */}
          <div className="bg-white/10 rounded-xl p-6 mb-8 border border-white/20">
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              What happens next?
            </h2>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  When an election opens, you&apos;ll receive an SMS
                  notification with a link to vote
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  You&apos;ll have a designated time period to cast
                  your vote
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  After voting, you&apos;ll receive a confirmation
                  message
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Results will be announced after the election closes
                </span>
              </li>
            </ul>
          </div>

          {/* Optional: Countdown Timer */}
          {/* Uncomment this section if you want to show a countdown
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
              <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
              <div className="text-sm text-blue-100">Days</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
              <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
              <div className="text-sm text-blue-100">Hours</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
              <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
              <div className="text-sm text-blue-100">Minutes</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
              <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
              <div className="text-sm text-blue-100">Seconds</div>
            </div>
          </div>
          */}

          {/* Call to Action */}
          <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-400/30">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-yellow-300 mr-3 mt-1 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Don&apos;t miss the next election!
                </h3>
                <p className="text-blue-100 mb-4">
                  Sign up for SMS notifications to be alerted as soon
                  as voting opens.
                </p>
                <Link
                  href="/sms-opt-in"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Enable SMS Notifications
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-blue-100 text-sm mb-4">
              Need help or have questions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@dysruptivetech.com"
                className="inline-flex items-center justify-center text-white hover:text-blue-200 transition-colors">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                support@dysruptivetech.com
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center text-white hover:text-blue-200 transition-colors">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-blue-100 text-sm">
            © 2025 Electra - Secure Organizational Voting System
          </p>
          <div className="mt-2 space-x-4">
            <Link
              href="/privacy-policy"
              className="text-blue-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-blue-200">•</span>
            <Link
              href="/terms-and-conditions"
              className="text-blue-200 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
