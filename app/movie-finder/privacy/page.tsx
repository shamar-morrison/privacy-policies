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
            This Privacy Policy explains how our movie discovery app ("we", "our", or "the App") 
            handles information. We are committed to protecting your privacy and being transparent 
            about our practices.
          </p>
        </section>

        {/* Information Collection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Information We Collect
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Our app is designed with privacy as a priority. We do NOT collect, store, or share:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Personal information (name, email, phone number)</li>
            <li>User accounts or login credentials</li>
            <li>Location data</li>
            <li>Device identifiers for tracking</li>
            <li>Usage analytics or browsing history</li>
            <li>Payment or financial information</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            The app processes movie search queries locally on your device to display results from 
            public movie databases. Movie posters and information may be temporarily cached on your 
            device to improve performance.
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Third-Party Movie Data
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            The app retrieves movie information from third-party movie databases, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Movie titles and descriptions</li>
            <li>Movie posters and images</li>
            <li>Ratings and release information</li>
            <li>Trailer links</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            When you search for or browse movies, requests are sent directly from your device to 
            these third-party services. We do not intercept, store, or monitor these requests.
          </p>
        </section>

        {/* Data Storage */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Data Storage
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            All movie data displayed in the app is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Retrieved in real-time from movie databases</li>
            <li>Temporarily cached on your device for faster loading</li>
            <li>NOT stored on our servers (we don't operate any servers)</li>
            <li>Automatically cleared when you uninstall the app or clear app data</li>
          </ul>
        </section>

        {/* Permissions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            App Permissions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            The app requires the following permissions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Internet Access:</strong> Required to retrieve movie information and images</li>
            <li><strong>Storage:</strong> To cache movie posters and data for faster performance</li>
          </ul>
        </section>

        {/* Children's Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Children's Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The app does not knowingly collect information from children under 13 years of age. 
            The app is not directed at children under 13.
          </p>
        </section>

        {/* Data Sharing */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Data Sharing
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do NOT share, sell, rent, or trade any user information with third parties. Since we 
            don't collect personal data, there is nothing to share.
          </p>
        </section>

        {/* Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            While we don't collect personal information, we take reasonable measures to ensure the 
            app functions securely. All connections to movie databases use secure HTTPS protocols 
            where available.
          </p>
        </section>

        {/* Changes to Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be reflected by 
            updating the "Last Updated" date. Your continued use of the app after changes indicates 
            acceptance of the updated policy.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Contact Us
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong>{' '}
              <a 
                href="mailto:shamar.webdev@gmail.com" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                shamar.webdev@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Acceptance
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By using this app, you acknowledge that you have read and understood this Privacy Policy 
            and agree to its terms.
          </p>
        </section>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2025 Movie Discovery App. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;