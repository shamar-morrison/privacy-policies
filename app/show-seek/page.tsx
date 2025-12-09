export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">ShowSeek Privacy Policy</h1>
          <p className="text-gray-400">Last Updated: December 9, 2025</p>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">Introduction</h2>
          <p className="leading-relaxed text-gray-300">
            ShowSeek (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, store, and share
            information when you use our ShowSeek mobile application (&quot;App&quot;).
          </p>
          <p className="mt-4 leading-relaxed text-gray-300">
            By using ShowSeek, you agree to the collection and use of information in accordance with
            this policy.
          </p>
        </section>

        {/* Developer Information */}
        <section className="mb-10 rounded-lg bg-gray-900 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-white">Developer Information</h2>
          <div className="space-y-2 text-gray-300">
            <p>
              <span className="font-medium text-gray-200">App Name:</span> ShowSeek
            </p>
            <p>
              <span className="font-medium text-gray-200">Developer:</span> TheAvgCoder
            </p>
            <p>
              <span className="font-medium text-gray-200">Contact Email:</span>{' '}
              <a
                href="mailto:shamar.morrison2000@gmail.com"
                className="text-red-500 hover:text-red-400 underline"
              >
                shamar.morrison2000@gmail.com
              </a>
            </p>
          </div>
        </section>

        <hr className="my-10 border-gray-800" />

        {/* Information We Collect */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-semibold text-white">Information We Collect</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-medium text-gray-100">1. Account Information</h3>
              <p className="mb-3 text-gray-300">
                When you create an account with ShowSeek, we collect:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-gray-300">
                <li>
                  <strong className="text-gray-200">Email Address</strong> — Used for account
                  authentication and password recovery
                </li>
                <li>
                  <strong className="text-gray-200">Authentication Credentials</strong> — Securely
                  managed through Firebase Authentication
                </li>
              </ul>
              <p className="mt-3 text-gray-400">
                We also offer <strong className="text-gray-300">Guest Mode</strong>, which allows
                limited use of the app without creating an account. Guest users cannot save personal
                lists, ratings, or reminders.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-medium text-gray-100">2. User-Generated Content</h3>
              <p className="mb-3 text-gray-300">
                When you use ShowSeek, we collect and store data you create:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-gray-300">
                <li>
                  <strong className="text-gray-200">Personal Lists</strong> — Watchlists, favorites,
                  &quot;currently watching,&quot; &quot;already watched,&quot; &quot;dropped,&quot;
                  and custom lists
                </li>
                <li>
                  <strong className="text-gray-200">Ratings</strong> — Your ratings for movies, TV
                  shows, and individual episodes
                </li>
                <li>
                  <strong className="text-gray-200">Episode Tracking</strong> — Records of which TV
                  episodes you have watched
                </li>
                <li>
                  <strong className="text-gray-200">Reminders</strong> — Preferences for release
                  date notifications for movies and TV shows
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-medium text-gray-100">
                3. Automatically Collected Information
              </h3>
              <ul className="ml-6 list-disc space-y-2 text-gray-300">
                <li>
                  <strong className="text-gray-200">Device Identifiers</strong> — For delivering
                  push notifications (via Expo Push Notifications)
                </li>
                <li>
                  <strong className="text-gray-200">App Usage Data</strong> — Basic analytics to
                  improve app performance and user experience
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-medium text-gray-100">4. Third-Party Data</h3>
              <p className="text-gray-300">
                We retrieve movie and TV show information from{' '}
                <strong className="text-gray-200">The Movie Database (TMDB)</strong> API. This
                content data (titles, posters, release dates, cast information) is publicly
                available and is not personal data.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-800" />

        {/* How We Use Your Information */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-semibold text-white">How We Use Your Information</h2>
          <p className="mb-4 text-gray-300">We use the information we collect to:</p>
          <ol className="ml-6 list-decimal space-y-2 text-gray-300">
            <li>
              <strong className="text-gray-200">Provide Core App Features</strong> — Enable you to
              track movies and TV shows, create and manage personal lists, rate content, and track
              episode progress
            </li>
            <li>
              <strong className="text-gray-200">Send Notifications</strong> — Deliver release
              reminders you have opted into for upcoming movies and TV episodes
            </li>
            <li>
              <strong className="text-gray-200">Account Management</strong> — Allow you to sign in,
              manage your account, and recover your password
            </li>
            <li>
              <strong className="text-gray-200">Improve the App</strong> — Analyze aggregated usage
              patterns to enhance features and fix issues
            </li>
          </ol>

          <div className="mt-6 rounded-lg border border-green-800 bg-green-950/30 p-4">
            <p className="font-medium text-green-400">We do NOT use your data for:</p>
            <ul className="mt-2 ml-6 list-disc space-y-1 text-green-300">
              <li>Advertising or ad personalization</li>
              <li>Selling to third parties</li>
              <li>Profiling or behavioral tracking beyond basic app functionality</li>
            </ul>
          </div>
        </section>

        <hr className="my-10 border-gray-800" />

        {/* Data Storage and Security */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-semibold text-white">Data Storage and Security</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-medium text-gray-100">Storage Location</h3>
              <p className="text-gray-300">
                All user data is stored securely using{' '}
                <strong className="text-gray-200">Google Firebase</strong> services:
              </p>
              <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-300">
                <li>
                  <strong className="text-gray-200">Firebase Authentication</strong> — Manages user
                  accounts and authentication
                </li>
                <li>
                  <strong className="text-gray-200">Cloud Firestore</strong> — Stores lists,
                  ratings, episode tracking, and reminders
                </li>
              </ul>
              <p className="mt-3 text-gray-400">
                Data is stored on Google Cloud infrastructure located in the United States.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-medium text-gray-100">Security Measures</h3>
              <ul className="ml-6 list-disc space-y-2 text-gray-300">
                <li>
                  <strong className="text-gray-200">Encryption in Transit</strong> — All data is
                  transmitted using HTTPS/TLS encryption
                </li>
                <li>
                  <strong className="text-gray-200">Firebase Security Rules</strong> — Database
                  access is restricted to authenticated users accessing only their own data
                </li>
                <li>
                  <strong className="text-gray-200">Secure Authentication</strong> — Passwords are
                  handled securely through Firebase Authentication (we never see or store your
                  actual password)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-800" />

        {/* Data Sharing */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-semibold text-white">Data Sharing</h2>

          <h3 className="mb-4 text-xl font-medium text-gray-100">Third-Party Services</h3>
          <p className="mb-4 text-gray-300">
            We share data with the following service providers to operate the App:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg bg-gray-900 text-left text-sm">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-800">
                  <th className="px-4 py-3 font-semibold text-gray-200">Service</th>
                  <th className="px-4 py-3 font-semibold text-gray-200">Purpose</th>
                  <th className="px-4 py-3 font-semibold text-gray-200">Data Shared</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="px-4 py-3 text-gray-300">Firebase Authentication</td>
                  <td className="px-4 py-3 text-gray-400">User login and account management</td>
                  <td className="px-4 py-3 text-gray-400">Email, authentication tokens</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Cloud Firestore</td>
                  <td className="px-4 py-3 text-gray-400">Data storage</td>
                  <td className="px-4 py-3 text-gray-400">
                    Lists, ratings, episode tracking, reminders
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Expo Notifications</td>
                  <td className="px-4 py-3 text-gray-400">Push notifications</td>
                  <td className="px-4 py-3 text-gray-400">Device push token</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">TMDB API</td>
                  <td className="px-4 py-3 text-gray-400">Movie/TV data retrieval</td>
                  <td className="px-4 py-3 text-gray-400">None (read-only API access)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-lg border border-red-800 bg-red-950/30 p-4">
            <p className="font-medium text-red-400">We Do NOT:</p>
            <ul className="mt-2 ml-6 list-disc space-y-1 text-red-300">
              <li>
                <strong>Sell</strong> your personal data to any third party
              </li>
              <li>Share data with advertising networks</li>
              <li>Provide data to data brokers</li>
              <li>Transfer data for purposes other than providing the App</li>
            </ul>
          </div>

          <p className="mt-4 text-gray-400">
            <strong className="text-gray-300">Legal Disclosure:</strong> We may disclose your
            information if required by law or in response to valid legal requests from public
            authorities.
          </p>
        </section>

        <hr className="my-10 border-gray-800" />

        {/* Data Retention and Deletion */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-semibold text-white">Data Retention and Deletion</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-medium text-gray-100">Retention Period</h3>
              <p className="text-gray-300">
                We retain your data for as long as your account is active. User-generated content
                (lists, ratings, tracking data) is retained to provide you with continuous service.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-medium text-gray-100">Account Deletion</h3>
              <p className="mb-4 text-gray-300">
                You have the right to delete your account and all associated data at any time.
              </p>

              <div className="rounded-lg bg-gray-900 p-4">
                <p className="mb-3 font-medium text-gray-200">To delete your account:</p>
                <ol className="ml-6 list-decimal space-y-1 text-gray-300">
                  <li>Open the ShowSeek app</li>
                  <li>
                    Navigate to <strong className="text-gray-200">Profile</strong> tab
                  </li>
                  <li>
                    Tap <strong className="text-gray-200">Delete Account</strong>
                  </li>
                  <li>Confirm the deletion</li>
                </ol>
              </div>

              <div className="mt-4 rounded-lg border border-yellow-800 bg-yellow-950/30 p-4">
                <p className="font-medium text-yellow-400">Upon account deletion:</p>
                <ul className="mt-2 ml-6 list-disc space-y-1 text-yellow-300">
                  <li>Your authentication account will be permanently deleted</li>
                  <li>
                    All associated data (lists, ratings, episode tracking, reminders) will be
                    permanently deleted from our servers
                  </li>
                  <li>
                    This action is <strong>irreversible</strong>
                  </li>
                </ul>
              </div>

              <p className="mt-4 text-gray-400">
                If you are unable to access the app, you may request account deletion by emailing us
                at{' '}
                <a
                  href="mailto:shamar.morrison2000@gmail.com"
                  className="text-red-500 hover:text-red-400 underline"
                >
                  shamar.morrison2000@gmail.com
                </a>{' '}
                with the email address associated with your account.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-800" />

        {/* Your Rights */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-semibold text-white">Your Rights</h2>
          <p className="mb-4 text-gray-300">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-gray-300">
            <li>
              <strong className="text-gray-200">Access</strong> — Request a copy of the personal
              data we hold about you
            </li>
            <li>
              <strong className="text-gray-200">Correction</strong> — Request correction of
              inaccurate data
            </li>
            <li>
              <strong className="text-gray-200">Deletion</strong> — Request deletion of your data
              (see Account Deletion above)
            </li>
            <li>
              <strong className="text-gray-200">Data Portability</strong> — Request your data in a
              portable format
            </li>
            <li>
              <strong className="text-gray-200">Withdraw Consent</strong> — Withdraw consent for
              data processing where applicable
            </li>
          </ul>
          <p className="mt-4 text-gray-400">
            To exercise any of these rights, please contact us at{' '}
            <a
              href="mailto:shamar.morrison2000@gmail.com"
              className="text-red-500 hover:text-red-400 underline"
            >
              shamar.morrison2000@gmail.com
            </a>
            .
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg bg-gray-900 p-4">
              <h3 className="mb-2 text-lg font-medium text-gray-100">For EU/EEA/UK Users (GDPR)</h3>
              <p className="text-gray-400">
                If you are located in the European Union, European Economic Area, or United Kingdom,
                you have additional rights under the General Data Protection Regulation (GDPR). Our
                legal basis for processing your data is:
              </p>
              <ul className="mt-2 ml-6 list-disc space-y-1 text-gray-400">
                <li>
                  <strong className="text-gray-300">Consent</strong> — For optional features like
                  notifications
                </li>
                <li>
                  <strong className="text-gray-300">Contract Performance</strong> — To provide the
                  service you signed up for
                </li>
                <li>
                  <strong className="text-gray-300">Legitimate Interests</strong> — For basic
                  analytics and app improvement
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-900 p-4">
              <h3 className="mb-2 text-lg font-medium text-gray-100">
                For California Users (CCPA)
              </h3>
              <p className="text-gray-400">California residents have the right to:</p>
              <ul className="mt-2 ml-6 list-disc space-y-1 text-gray-400">
                <li>Know what personal information we collect</li>
                <li>Request deletion of personal information</li>
                <li>
                  Opt-out of the sale of personal information (we do not sell personal information)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-800" />

        {/* Children's Privacy */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">Children&apos;s Privacy</h2>
          <p className="text-gray-300">
            ShowSeek is{' '}
            <strong className="text-gray-200">not directed at children under the age of 13</strong>.
            We do not knowingly collect personal information from children under 13. If you are a
            parent or guardian and believe your child has provided us with personal information,
            please contact us at{' '}
            <a
              href="mailto:shamar.morrison2000@gmail.com"
              className="text-red-500 hover:text-red-400 underline"
            >
              shamar.morrison2000@gmail.com
            </a>
            , and we will delete such information.
          </p>
        </section>

        <hr className="my-10 border-gray-800" />

        {/* Permissions */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-semibold text-white">Permissions</h2>
          <p className="mb-4 text-gray-300">ShowSeek requests the following device permissions:</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg bg-gray-900 text-left text-sm">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-800">
                  <th className="px-4 py-3 font-semibold text-gray-200">Permission</th>
                  <th className="px-4 py-3 font-semibold text-gray-200">Purpose</th>
                  <th className="px-4 py-3 font-semibold text-gray-200">Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Notifications</td>
                  <td className="px-4 py-3 text-gray-400">
                    To send release reminders for movies and TV shows
                  </td>
                  <td className="px-4 py-3 text-gray-400">Optional</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-400">
            We do <strong className="text-gray-300">not</strong> request access to: Camera,
            Microphone, Location, Contacts, or Storage (beyond app-specific storage).
          </p>
        </section>

        <hr className="my-10 border-gray-800" />

        {/* Changes to This Policy */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">Changes to This Policy</h2>
          <p className="mb-4 text-gray-300">
            We may update this Privacy Policy from time to time. We will notify you of any material
            changes by:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-gray-300">
            <li>Posting the updated policy here with a new &quot;Last Updated&quot; date</li>
            <li>Providing notice within the App for significant changes</li>
          </ul>
          <p className="mt-4 text-gray-400">
            We encourage you to review this Privacy Policy periodically.
          </p>
        </section>

        <hr className="my-10 border-gray-800" />

        {/* Contact Us */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our
            data practices, please contact us:
          </p>
          <p className="mt-4 text-gray-300">
            <strong className="text-gray-200">Email:</strong>{' '}
            <a
              href="mailto:privacy@horizonapps.dev"
              className="text-red-500 hover:text-red-400 underline"
            >
              shamar.morrison2000@gmail.com
            </a>
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>This Privacy Policy is effective as of December 9, 2025.</p>
          <p className="mt-2">© 2024 ShowSeek. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
