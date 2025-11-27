// app/sms-opt-in/page.tsx
'use client';

import { useState } from 'react';

export default function SMSOptInPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Send to your backend API
    console.log('Form submitted:', formData);

    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Successfully Opted In!
          </h2>
          <p className="text-gray-600 mb-6">
            You will now receive SMS notifications about elections.
            You can opt-out anytime by replying STOP.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-blue-600 hover:text-blue-700 font-medium">
            Register Another Number
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-xl p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dysruptive Technologies - Election SMS Notifications
          </h1>
          <p className="text-gray-600">
            Stay informed about organizational elections
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-xl p-8 space-y-6">
          {/* What You'll Receive Section */}
          <div className="border-l-4 border-blue-600 pl-4 py-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              What You&apos;ll Receive
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Election start notifications when voting opens
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Vote confirmation after you submit your ballot
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Reminders before elections close</span>
              </li>
            </ul>
          </div>

          {/* Message Frequency */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Message Frequency
            </h3>
            <p className="text-gray-700 text-sm">
              You will receive approximately{' '}
              <strong>2-3 messages per election</strong>. We conduct
              4-6 elections per year, so you can expect 8-18 messages
              annually.
            </p>
          </div>

          {/* Costs Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-gray-700">
              <strong>Message and data rates may apply.</strong>{' '}
              Standard SMS rates from your carrier will apply. We do
              not charge for these messages.
            </p>
          </div>

          {/* Opt-In Form */}
          <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Sign Up for SMS Notifications
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+1234567890"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Include country code (e.g., +1 for USA, +233 for
                  Ghana)
                </p>
              </div>

              <div className="pt-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="consent"
                    className="ml-3 text-sm text-gray-700">
                    <strong>
                      I agree to receive SMS notifications
                    </strong>{' '}
                    from Dysruptive Technologies about election
                    schedules, vote confirmations, and election
                    updates (2-3 messages per election). I understand
                    that message and data rates may apply. I can
                    opt-out at any time by replying STOP to any
                    message. *
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={
                  !formData.consent ||
                  !formData.name ||
                  !formData.phone
                }
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold 
                         hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed
                         transition-colors duration-200">
                Sign Up for SMS Notifications
              </button>
            </form>
          </div>

          {/* Help & Support */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-800 mb-3">
              Help & Support
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>To get help:</strong> Reply HELP to any
                message or email us at
                <a
                  href="mailto:support@dysruptivetech.com"
                  className="text-blue-600 hover:underline ml-1">
                  support@dysruptivetech.com
                </a>
              </p>
              <p>
                <strong>To stop receiving messages:</strong> Reply
                STOP to any message at any time.
              </p>
              <p>
                <strong>Alternative opt-in:</strong> You can also text
                START to +1-XXX-XXX-XXXX to opt-in.
              </p>
            </div>
          </div>

          {/* Privacy & Terms */}
          <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600 space-y-2">
            <p>
              <strong className="text-gray-800">
                Privacy Commitment:
              </strong>{' '}
              No mobile information will be shared with third parties
              or affiliates for marketing or promotional purposes. All
              data is used solely for delivering election
              notifications.
            </p>
            <p>
              By opting in, you agree to our{' '}
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="/terms-and-conditions"
                className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
              .
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-white rounded-b-2xl shadow-xl p-6 text-center text-sm">
          <p className="mb-2">
            © 2025 Dysruptive Technologies - Organizational Election
            System
          </p>
          <div className="space-x-4">
            <a
              href="/privacy-policy"
              className="text-blue-300 hover:text-blue-200">
              Privacy Policy
            </a>
            <span className="text-gray-500">•</span>
            <a
              href="/terms-and-conditions"
              className="text-blue-300 hover:text-blue-200">
              Terms & Conditions
            </a>
            <span className="text-gray-500">•</span>
            <a
              href="mailto:support@dysruptivetech.com"
              className="text-blue-300 hover:text-blue-200">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
