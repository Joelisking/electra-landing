'use client';
import Link from 'next/link';
import { useState } from 'react';

// app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen ">
      <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
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
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/vote"
                className="text-white hover:text-blue-200 transition-colors">
                Vote
              </Link>
              <Link
                href="/sms-opt-in"
                className="text-white hover:text-blue-200 transition-colors">
                SMS Notifications
              </Link>
              <Link
                href="/privacy-policy"
                className="text-white hover:text-blue-200 transition-colors">
                Privacy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-white hover:text-blue-200 transition-colors">
                Terms
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white hover:text-blue-200 focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/vote"
                className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors"
                onClick={() => setMenuOpen(false)}>
                Vote
              </Link>
              <Link
                href="/sms-opt-in"
                className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors"
                onClick={() => setMenuOpen(false)}>
                SMS Notifications
              </Link>
              <Link
                href="/privacy-policy"
                className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors"
                onClick={() => setMenuOpen(false)}>
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors"
                onClick={() => setMenuOpen(false)}>
                Terms & Conditions
              </Link>
            </div>
          </div>
        )}
      </nav>
      <div className="mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Last Updated: November 27, 2025
        </p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              1. Introduction
            </h2>
            <p>
              Dysruptive Technologies (&quot;we,&quot;
              &quot;our,&quot; or &quot;us&quot;) operates and manages
              an organizational election voting system. This Privacy
              Policy explains how we collect, use, disclose, and
              safeguard your information when you register for
              elections and opt-in to receive SMS notifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              2.1 Personal Information
            </h3>
            <p className="mb-3">
              When you register as a voter, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full name</li>
              <li>Phone number (with country code)</li>
              <li>Email address</li>
              <li>Organizational affiliation</li>
              <li>Voter registration details</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              2.2 SMS Notification Data
            </h3>
            <p className="mb-3">
              When you opt-in to SMS notifications, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Mobile phone number</li>
              <li>Consent timestamp</li>
              <li>Message delivery status</li>
              <li>Opt-in/opt-out preferences</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              2.3 Voting Data
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Vote submissions (anonymized)</li>
              <li>Voting timestamps</li>
              <li>Election participation records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Election Administration:</strong> To manage
                voter registration, verify eligibility, and facilitate
                the voting process.
              </li>
              <li>
                <strong>SMS Notifications:</strong> To send
                election-related messages including:
                <ul className="list-circle pl-6 mt-1 space-y-1">
                  <li>Election start notifications</li>
                  <li>Vote confirmation messages</li>
                  <li>Election closing reminders</li>
                  <li>Important election updates</li>
                </ul>
              </li>
              <li>
                <strong>Communication:</strong> To respond to
                inquiries, provide support, and send administrative
                information.
              </li>
              <li>
                <strong>System Improvement:</strong> To analyze system
                performance and improve our services.
              </li>
              <li>
                <strong>Compliance:</strong> To comply with legal
                obligations and enforce our terms.
              </li>
            </ul>
          </section>

          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              4. SMS Marketing and Third-Party Sharing
            </h2>
            <p className="font-semibold text-gray-900 mb-2">
              IMPORTANT NOTICE:
            </p>
            <p className="mb-3">
              <strong>
                No mobile information will be shared with third
                parties or affiliates for marketing or promotional
                purposes.
              </strong>
            </p>
            <p>
              Your phone number is used exclusively for sending
              election-related notifications as described in this
              policy. We do not sell, rent, or share your mobile
              information with any third parties for their marketing
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              5. Information Sharing and Disclosure
            </h2>
            <p className="mb-3">
              We may share your information only in the following
              limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> We may share
                information with third-party service providers who
                perform services on our behalf (e.g., SMS delivery
                providers like Twilio, Arkesel, or Vonage). These
                providers are contractually obligated to use your
                information only for providing services to us and to
                protect your information.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose
                information if required by law, court order, or
                governmental authority.
              </li>
              <li>
                <strong>Election Results:</strong> Voting results may
                be shared publicly, but votes are anonymized and
                cannot be traced back to individual voters.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              6. SMS Notification Specifics
            </h2>

            <h3 className="text-xl font-medium text-gray-800 mb-2">
              6.1 Message Frequency
            </h3>
            <p className="mb-3">
              You will receive approximately 2-3 SMS messages per
              election. We conduct 4-6 elections per year, resulting
              in approximately 8-18 messages annually.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-2">
              6.2 Message Content
            </h3>
            <p className="mb-3">SMS messages will contain:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Election start notifications with voting links</li>
              <li>Confirmation messages after vote submission</li>
              <li>Reminders before election closing</li>
              <li>Critical election updates (rare)</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-2">
              6.3 Costs
            </h3>
            <p className="mb-3">
              Message and data rates may apply based on your mobile
              carrier&apos;s plan. We do not charge for sending these
              messages.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-2">
              6.4 Opt-Out
            </h3>
            <p className="mb-3">
              You may opt-out of SMS notifications at any time by:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Replying STOP to any SMS message</li>
              <li>Contacting us at support@dysruptivetech.com</li>
              <li>Updating your preferences in your voter profile</li>
            </ul>
            <p className="mt-2">
              Opting out of SMS will not affect your ability to
              participate in elections through our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              7. Data Security
            </h2>
            <p className="mb-3">
              We implement appropriate technical and organizational
              security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or
              destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure server infrastructure</li>
              <li>Access controls and authentication</li>
              <li>Regular security audits</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              8. Data Retention
            </h2>
            <p className="mb-3">
              We retain your personal information for as long as
              necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is
              required by law. Specifically:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Voter registration data: Retained while you remain a
                registered voter
              </li>
              <li>
                Voting records: Retained for audit purposes
                (anonymized)
              </li>
              <li>
                SMS opt-in records: Retained until you opt-out plus 1
                year for compliance
              </li>
              <li>Message delivery logs: Retained for 90 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              9. Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>
                Request deletion of your information (subject to legal
                requirements)
              </li>
              <li>Opt-out of SMS notifications at any time</li>
              <li>Object to processing of your information</li>
              <li>Request a copy of your data</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at
              support@dysruptivetech.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              10. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under 18
              years of age. We do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              11. International Users
            </h2>
            <p>
              If you are accessing our services from outside the
              United States, please be aware that your information may
              be transferred to, stored, and processed in the United
              States or other countries where our service providers
              operate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              12. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We
              will notify you of any material changes by posting the
              new Privacy Policy on this page and updating the
              &quot;Last Updated&quot; date. For significant changes,
              we may also send you an email notification or SMS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              13. Contact Us
            </h2>
            <p className="mb-3">
              If you have questions or concerns about this Privacy
              Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>
                <strong>Email:</strong> support@dysruptivetech.com
              </p>
              <p>
                <strong>Website:</strong>{' '}
                https://electra.dysruptivetech.com
              </p>
              <p>
                <strong>SMS Support:</strong> Reply HELP to any
                message
              </p>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-600">
              By using our services and opting into SMS notifications,
              you acknowledge that you have read and understood this
              Privacy Policy.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t">
          <a
            href="/sms-opt-in"
            className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to SMS Opt-In
          </a>
        </div>
      </div>
    </div>
  );
}
