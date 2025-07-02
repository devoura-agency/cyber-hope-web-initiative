
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Cyberhope Help Initiative Foundation - Data Protection & Privacy Guidelines
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy outlines how Cyberhope Help Initiative Foundation (CyberHelps) collects, 
                uses, protects, and handles personal and sensitive information of clients, employees, and stakeholders.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information Collection</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Data Collection Principles</h3>
                  <p className="text-gray-700">
                    Data collection is limited to what is necessary for legitimate NGO operations, including 
                    cybercrime prevention, victim assistance, and educational programs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2 Types of Information Collected</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Personal identification information (name, contact details)</li>
                    <li>Case-related information for cybercrime assistance</li>
                    <li>Educational program participation data</li>
                    <li>Membership and volunteer information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Confidentiality & Data Handling</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1 Strict Confidentiality</h3>
                  <p className="text-gray-700">
                    All personal and sensitive information of clients, employees, and stakeholders is handled 
                    with strict confidentiality and professional discretion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3.2 Authorized Access Only</h3>
                  <p className="text-gray-700">
                    Only authorized personnel have access to case data and personal information. 
                    Access is granted on a need-to-know basis for legitimate organizational purposes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3.3 Secure Storage Systems</h3>
                  <p className="text-gray-700">
                    All digital storage systems comply with applicable data protection regulations. 
                    NGO work is conducted on secure, password-protected devices.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Disclosure</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Consent Required</h3>
                  <p className="text-gray-700">
                    Employees and volunteers must not disclose any private information without prior consent 
                    from the concerned individual, except when legally obligated.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.2 Legal Obligations</h3>
                  <p className="text-gray-700">
                    Information may be disclosed when required by law enforcement agencies or 
                    judicial authorities in connection with ongoing investigations.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security Measures</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Encrypted storage and transmission of sensitive data</li>
                <li>Regular security audits and system updates</li>
                <li>Multi-factor authentication for system access</li>
                <li>Secure backup and recovery procedures</li>
                <li>24-hour breach reporting protocol</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Breach Protocol</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">6.1 Immediate Reporting</h3>
                  <p className="text-gray-700">
                    All data breaches must be reported to the designated authority within 24 hours of discovery.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">6.2 Affected Party Notification</h3>
                  <p className="text-gray-700">
                    Individuals whose data has been compromised will be notified promptly along with 
                    steps being taken to mitigate the breach.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Individual Rights</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Right to access personal data held by the organization</li>
                <li>Right to request correction of inaccurate information</li>
                <li>Right to request deletion of personal data (subject to legal requirements)</li>
                <li>Right to withdraw consent for data processing</li>
                <li>Right to file complaints regarding data handling</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disciplinary Actions</h2>
              <p className="text-gray-700">
                Breach of privacy policies may result in disciplinary actions including warning, 
                suspension, or termination of employment/association with the organization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  For privacy-related queries or to exercise your rights, contact us:
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@chhif.org<br />
                  <strong>Phone:</strong> 9849606691<br />
                  <strong>Address:</strong> Cyberhope Help Initiative Foundation
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Policy Updates</h2>
              <p className="text-gray-700">
                This Privacy Policy may be updated periodically to reflect changes in our practices 
                or applicable laws. The latest version will always be available on our website.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
