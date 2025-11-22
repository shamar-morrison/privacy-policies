import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        {/* Header */}
        <div className="border-b-4 border-blue-600 pb-4 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy for Movie Finder
          </h1>
          <p className="text-gray-600 italic">
            <strong>Last Updated:</strong> November 22, 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy describes how Movie Finder ("we", "our", or "the App") 
            collects, uses, and protects information when you use our mobile application. We are 
            committed to protecting your privacy and being transparent about our data practices.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Information We Collect
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Information We DO NOT Collect
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Our app is designed with privacy in mind. We do NOT collect, store, or transmit:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Personal identification information (name, email, phone number)</li>
            <li>User accounts or login credentials</li>
            <li>Payment information</li>
            <li>Location data</li>
            <li>Device identifiers for tracking purposes</li>
            <li>Usage analytics or behavioral data</li>
            <li>Cookies or similar tracking technologies</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Information Automatically Processed
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            When you use the App, the following information is processed locally on your device or 
            transmitted directly to third-party services:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              <strong>Movie Search Queries:</strong> Search terms you enter are sent directly to 
              the YTS API to fetch movie results
            </li>
            <li>
              <strong>API Requests:</strong> Movie browsing, filtering, and detail requests are 
              sent to the YTS API
            </li>
            <li>
              <strong>Device Storage:</strong> Movie data and images may be temporarily cached on 
              your device to improve performance
            </li>
          </ul>
        </section>

        {/* Third-Party Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Third-Party Services
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">YTS API</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Our app uses the YTS API (
            <a 
              href="https://yts.lt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              https://yts.lt
            </a>
            ) to fetch movie information, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Movie titles, descriptions, and metadata</li>
            <li>Movie posters and images</li>
            <li>Torrent magnet links</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            When you use the App, requests are sent directly from your device to YTS servers. We do 
            not act as an intermediary for this data. Please review the{' '}
            <a 
              href="https://yts.lt/terms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              YTS Terms of Service
            </a>
            {' '}for information about how they handle data.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-900">
              <strong>Important:</strong> YTS is a third-party service outside our control. We are 
              not responsible for their data practices or privacy policies.
            </p>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            How We Use Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            The App processes information solely to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-3">
            <li>Display movie information from the YTS API</li>
            <li>Enable searching and filtering of movies</li>
            <li>Provide torrent magnet links for movie downloads</li>
            <li>Cache images and data locally to improve app performance</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            We do not analyze, aggregate, or use your information for any other purpose.
          </p>
        </section>

        {/* Data Storage */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Data Storage
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            All data displayed in the App is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Fetched directly from the YTS API in real-time</li>
            <li>Temporarily cached on your device for performance</li>
            <li>NOT stored on our servers (we do not operate any servers)</li>
            <li>Automatically cleared when you clear the app cache or uninstall the app</li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Data Sharing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We do NOT share, sell, rent, or trade any information with third parties because we do 
            not collect any personal data.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            The only data transmission occurs when:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Your device requests movie data from the YTS API</li>
            <li>Your device opens torrent magnet links in your preferred torrent client</li>
          </ul>
        </section>

        {/* Permissions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Permissions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            The App may request the following permissions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-3">
            <li>
              <strong>Internet Access:</strong> Required to fetch movie data from the YTS API
            </li>
            <li>
              <strong>Storage (if applicable):</strong> To cache images and movie data locally for 
              offline viewing
            </li>
            <li>
              <strong>External Storage (if applicable):</strong> To allow your torrent client to 
              save downloaded files
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            We only request permissions that are essential for the App's functionality.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Children's Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our App does not knowingly collect information from children under the age of 13. The 
            App is not directed at children, and we do not knowingly allow children under 13 to use 
            the service.
          </p>
        </section>

        {/* Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            While we do not collect personal data, we take reasonable measures to ensure the App 
            functions securely:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-3">
            <li>All API requests use secure HTTPS connections where available</li>
            <li>No user data is transmitted to our servers</li>
            <li>The App source code follows security best practices</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            However, please note that no method of electronic transmission or storage is 100% secure.
          </p>
        </section>

        {/* Legal Disclaimer */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Legal Disclaimer
          </h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <p className="text-yellow-900">
              <strong>IMPORTANT:</strong> This App provides access to torrent magnet links. 
              Downloading copyrighted material without permission may be illegal in your country 
              or jurisdiction.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">We do NOT:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-3">
            <li>Host any copyrighted content</li>
            <li>Store or distribute torrent files</li>
            <li>Condone or encourage copyright infringement</li>
            <li>Take responsibility for how you use the torrent links</li>
          </ul>

          <p className="text-gray-700 leading-relaxed font-semibold">
            You are solely responsible for ensuring your use of this App complies with all 
            applicable laws in your jurisdiction.
          </p>
        </section>

        {/* Changes to This Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We may update this Privacy Policy from time to time. We will notify you of any changes by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-3">
            <li>Updating the "Last Updated" date at the top of this policy</li>
            <li>Posting the new Privacy Policy in the app and/or on our repository</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Your continued use of the App after any changes indicates your acceptance of the updated 
            Privacy Policy.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Data Retention
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Since we do not collect or store personal data:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Movie data is only cached temporarily on your device</li>
            <li>Cached data can be cleared at any time through your device settings</li>
            <li>Uninstalling the app removes all locally stored data</li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Depending on your jurisdiction, you may have certain rights regarding your data. However, 
            since we do not collect personal information, most data rights do not apply. You have the 
            right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Uninstall the app at any time</li>
            <li>Clear the app's cache and data through device settings</li>
            <li>Contact us with privacy concerns</li>
          </ul>
        </section>

        {/* International Users */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            International Users
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The App can be used globally. Movie data is provided by YTS API, which may be subject to 
            different data protection laws than your country. By using the App, you consent to the 
            transfer of information to YTS servers.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Contact Us
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions or concerns about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong>{' '}
              <a 
                href="mailto:shamar.morrison2000@gmail.com" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                shamar.morrison2000@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* Open Source */}
        {/* <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Open Source
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This app is open source. You can review the complete source code at:{' '}
            <a 
              href="https://github.com/shamar-morrison/torrent-movie-downloader" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all"
            >
              https://github.com/shamar-morrison/torrent-movie-downloader
            </a>
          </p>
        </section> */}

        {/* Divider */}
        <hr className="my-10 border-gray-300" />

        {/* Acknowledgment */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Acknowledgment
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By using Movie Finder, you acknowledge that you have read and understood this 
            Privacy Policy and agree to its terms.
          </p>
        </section>

        {/* Copyright Notice */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Copyright Notice
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The developers of this app do not condone piracy or copyright infringement. This app is 
            provided for educational purposes only. Users are responsible for complying with all 
            applicable copyright laws in their jurisdiction.
          </p>
        </section>

        {/* Footer */}
        {/* <div className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2025 Movie Finder. All rights reserved.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;