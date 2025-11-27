'use client';
import Link from 'next/link';
import { useState } from 'react';

// app/terms-and-conditions/page.tsx
export default function TermsAndConditionsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
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
      <div className=" py-12 px-4 sm:px-6 lg:px-8 mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Last Updated: November 27, 2025
        </p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By registering as a voter, accessing our election
              system, or opting into SMS notifications, you agree to
              be bound by these Terms and Conditions and our Privacy
              Policy. If you do not agree to these terms, please do
              not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              2. SMS Notification Service
            </h2>

            <h3 className="text-xl font-medium text-gray-800 mb-2">
              2.1 Service Description
            </h3>
            <p className="mb-3">
              Dysruptive Technologies provides SMS notification
              services to inform registered voters about:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Election start notifications</li>
              <li>Vote confirmation messages</li>
              <li>Election closing reminders</li>
              <li>Important election updates</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              2.2 Message Frequency
            </h3>
            <p>
              By opting into SMS notifications, you consent to receive
              approximately 2-3 messages per election. We conduct 4-6
              elections per year, resulting in approximately 8-18
              messages annually. Message frequency may vary based on
              election schedules.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              2.3 Message and Data Rates
            </h3>
            <p className="mb-2">
              <strong>Message and data rates may apply.</strong> You
              are responsible for any charges incurred from your
              mobile carrier for receiving SMS messages. We do not
              charge for sending these messages.
            </p>
            <p>
              Standard SMS rates from your mobile carrier will apply.
              Check with your carrier for details about your messaging
              plan.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              2.4 Supported Carriers
            </h3>
            <p>
              Our SMS service works with most major carriers. If you
              experience issues receiving messages, contact your
              carrier or our support team.
            </p>
          </section>

          <section className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              3. Opt-In and Consent
            </h2>

            <h3 className="text-xl font-medium text-gray-800 mb-2">
              3.1 How to Opt-In
            </h3>
            <p className="mb-3">
              You can opt-in to receive SMS notifications by:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Checking the consent box during voter registration on
                our website
              </li>
              <li>
                Visiting our SMS opt-in page at
                https://electra.dysruptivetech.com/sms-opt-in
              </li>
              <li>
                Texting START to our designated number (if applicable)
              </li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              3.2 Explicit Consent Required
            </h3>
            <p>
              By opting in, you explicitly consent to receive
              recurring SMS messages from Dysruptive Technologies.
              Consent is not a condition of participation in elections
              - you can participate without receiving SMS
              notifications.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              3.3 Opt-Out Rights
            </h3>
            <p className="mb-3 font-semibold">
              You can opt-out at any time. To stop receiving messages:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Reply STOP</strong> to any SMS message you
                receive from us
              </li>
              <li>
                Email support@dysruptivetech.com with your opt-out
                request
              </li>
              <li>
                Update your notification preferences in your voter
                profile
              </li>
            </ul>
            <p className="mt-2">
              After opting out, you will receive one final
              confirmation message, then no further messages unless
              you opt-in again.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              4. Help and Support
            </h2>

            <h3 className="text-xl font-medium text-gray-800 mb-2">
              4.1 Getting Help
            </h3>
            <p className="mb-3">
              For assistance with SMS notifications:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Reply HELP</strong> to any SMS message
              </li>
              <li>Email: support@dysruptivetech.com</li>
              <li>
                Visit: https://electra.dysruptivetech.com/support
              </li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              4.2 Help Message Response
            </h3>
            <p>
              When you reply HELP, you will receive information about
              the service, including how to opt-out and contact
              information for support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              5. Voter Eligibility and Registration
            </h2>

            <h3 className="text-xl font-medium text-gray-800 mb-2">
              5.1 Registration Requirements
            </h3>
            <p className="mb-3">To register as a voter, you must:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Be a member of the organization conducting the
                election
              </li>
              <li>
                Provide accurate and complete registration information
              </li>
              <li>
                Have a valid phone number for identity verification
              </li>
              <li>Be at least 18 years of age</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              5.2 Accuracy of Information
            </h3>
            <p>
              You agree to provide accurate, current, and complete
              information during registration and to update this
              information as necessary. Providing false information
              may result in suspension or termination of your voter
              registration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              6. Voting Rules and Procedures
            </h2>

            <h3 className="text-xl font-medium text-gray-800 mb-2">
              6.1 One Person, One Vote
            </h3>
            <p>
              Each registered voter is entitled to one vote per
              election position or ballot item. Attempting to vote
              multiple times is prohibited and may result in
              disqualification.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              6.2 Voting Period
            </h3>
            <p>
              Votes must be cast within the designated voting period.
              Late votes will not be counted. You will receive SMS
              notifications (if opted in) when voting opens and
              reminders before it closes.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              6.3 Vote Confidentiality
            </h3>
            <p>
              Your individual votes are confidential and anonymous.
              Only aggregated results are disclosed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              7. Prohibited Conduct
            </h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the service for any unlawful purpose</li>
              <li>
                Attempt to vote multiple times or on behalf of others
              </li>
              <li>
                Interfere with or disrupt the service or servers
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the
                system
              </li>
              <li>Share your login credentials with others</li>
              <li>Use automated means to access the service</li>
              <li>
                Harass, abuse, or harm other users or administrators
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              8. Service Availability
            </h2>

            <h3 className="text-xl font-medium text-gray-800 mb-2">
              8.1 No Guarantee of Availability
            </h3>
            <p>
              While we strive to provide reliable service, we do not
              guarantee that the service will be available at all
              times or that SMS messages will be delivered without
              delay.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              8.2 SMS Delivery
            </h3>
            <p>
              SMS delivery depends on mobile carrier networks and may
              be subject to delays or failures beyond our control. We
              are not responsible for messages that are not delivered
              due to carrier issues, network problems, or phone
              settings.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              8.3 Maintenance
            </h3>
            <p>
              We may perform scheduled maintenance that temporarily
              affects service availability. We will attempt to
              schedule maintenance during non-voting periods when
              possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              9. Privacy and Data Protection
            </h2>
            <p>
              Your use of our services is also governed by our Privacy
              Policy, which is incorporated into these Terms by
              reference. Please review our Privacy Policy to
              understand how we collect, use, and protect your
              information.
            </p>
            <p className="mt-2">
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline">
                View our Privacy Policy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              10. Limitation of Liability
            </h2>
            <p className="mb-3">
              To the maximum extent permitted by law, Dysruptive
              Technologies and its service providers shall not be
              liable for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Any indirect, incidental, special, consequential, or
                punitive damages
              </li>
              <li>Loss of profits, data, or use</li>
              <li>Service interruptions or delays</li>
              <li>
                SMS delivery failures due to carrier or network issues
              </li>
              <li>
                Unauthorized access to or alteration of your
                transmissions or data
              </li>
            </ul>
            <p className="mt-3">
              Our total liability shall not exceed the amount you paid
              to use the service (if any) in the past six months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              11. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Dysruptive
              Technologies and its affiliates from any claims,
              damages, losses, liabilities, and expenses (including
              attorney fees) arising from your use of the service or
              violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              12. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time.
              We will notify you of material changes by email or SMS
              (if opted in) and by posting the updated Terms on our
              website. Your continued use of the service after changes
              constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              13. Termination
            </h2>

            <h3 className="text-xl font-medium text-gray-800 mb-2">
              13.1 Termination by You
            </h3>
            <p>
              You may terminate your voter registration at any time by
              contacting us. If you opt-out of SMS notifications, you
              can still participate in elections.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">
              13.2 Termination by Us
            </h3>
            <p>
              We may suspend or terminate your access if you violate
              these Terms or engage in fraudulent or abusive behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              14. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in
              accordance with the laws of the jurisdiction in which
              the organization is registered, without regard to
              conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              15. Contact Information
            </h2>
            <p className="mb-3">
              For questions about these Terms or our services:
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
              By using our services, you acknowledge that you have
              read, understood, and agree to be bound by these Terms
              and Conditions.
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
