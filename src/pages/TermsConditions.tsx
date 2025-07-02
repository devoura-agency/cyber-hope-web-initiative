
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Shield, Users, Scale } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/lovable-uploads/64adea60-ddb2-4f12-8d1b-a4789617b1cb.png" 
                alt="CHHIF Logo" 
                className="h-16 w-16 rounded-full border-2 border-blue-400 mr-4"
              />
              <div>
                <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
                <p className="text-blue-300">Employee Terms and Organizational Protocols</p>
              </div>
            </div>
            <div className="flex justify-center space-x-8 mt-8">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-sm">Security Protocols</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-sm">Employee Guidelines</span>
              </div>
              <div className="flex items-center">
                <Scale className="h-6 w-6 text-purple-400 mr-2" />
                <span className="text-sm">Code of Conduct</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none space-y-8">
              <section className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">1. Overview</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  This document outlines the terms of employment, responsibilities, and protocols for all 
                  Cyberhope Help Initiative Foundation (CyberHelps) employees. It promotes accountability, 
                  safety, and organizational integrity.
                </p>
              </section>

              <section className="border-l-4 border-red-500 pl-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-red-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">2. Mandatory Case Reporting & Authorization</h2>
                </div>
                <div className="space-y-3">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-gray-700 font-medium">2.1 All employees must report any cybercrime-related matter to senior authority.</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-gray-700 font-medium">2.2 No action should be taken without written permission.</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-gray-700 font-medium">2.3 Unauthorized action will result in disciplinary or legal action.</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-gray-700 font-medium">2.4 Every case must be logged into the Case Management System (CMS).</p>
                  </div>
                </div>
              </section>

              <section className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">3. Employment Terms</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-gray-700">3.1 All job positions are governed by role-specific duties.</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-gray-700">3.2 A 3-month probation period applies.</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-gray-700">3.3 Termination requires 30 days' notice.</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-gray-700">3.4 Salary and benefits are detailed in the offer letter.</p>
                  </div>
                </div>
              </section>

              <section className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center mb-4">
                  <Scale className="h-6 w-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">4. Code of Conduct & Ethics</h2>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-gray-700">4.1 No harassment, abuse, or misconduct will be tolerated.</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-gray-700">4.2 Bribery, corruption, or favoritism are grounds for dismissal.</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-gray-700">4.3 All conflicts of interest must be declared.</p>
                  </div>
                </div>
              </section>

              {/* Additional sections with similar styling */}
              <section className="border-l-4 border-orange-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Investigation Protocols</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-gray-700">5.1 Cases may only be investigated after written approval.</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-gray-700">5.2 Documentation and evidence must be secure.</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-gray-700">5.3 Regular updates should be submitted.</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-gray-700">5.4 Digital tracking must comply with law.</p>
                  </div>
                </div>
              </section>

              <section className="border-l-4 border-indigo-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality & Data Handling</h2>
                <div className="space-y-3">
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <p className="text-gray-700">6.1 Only authorized access to case data is permitted.</p>
                  </div>
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <p className="text-gray-700">6.2 NGO work must be done on secure, password-protected devices.</p>
                  </div>
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <p className="text-gray-700">6.3 Breaches must be reported within 24 hours.</p>
                  </div>
                </div>
              </section>

              <section className="border-l-4 border-pink-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Communication & Representation</h2>
                <div className="space-y-3">
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <p className="text-gray-700">7.1 Public statements require approval.</p>
                  </div>
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <p className="text-gray-700">7.2 Do not post case information on social media.</p>
                  </div>
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <p className="text-gray-700">7.3 Use formal tone in internal communication.</p>
                  </div>
                </div>
              </section>

              <section className="border-l-4 border-yellow-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Safety & Field Work</h2>
                <div className="space-y-3">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-gray-700">8.1 Check-in protocol for field visits is mandatory.</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-gray-700">8.2 Emergency contacts must be current.</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-gray-700">8.3 Always prioritize personal safety.</p>
                  </div>
                </div>
              </section>

              <section className="border-l-4 border-red-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disciplinary Action & Appeals</h2>
                <div className="space-y-3">
                  <div className="bg-red-50 border border-red-300 rounded-lg p-4">
                    <p className="text-gray-700 font-medium">9.1 1st offense = Warning; 2nd = Suspension; 3rd = Termination.</p>
                  </div>
                  <div className="bg-red-50 border border-red-300 rounded-lg p-4">
                    <p className="text-gray-700 font-medium">9.2 Serious violations may result in immediate termination.</p>
                  </div>
                  <div className="bg-red-50 border border-red-300 rounded-lg p-4">
                    <p className="text-gray-700 font-medium">9.3 Appeals must be submitted to the Grievance Committee.</p>
                  </div>
                </div>
              </section>

              <section className="border-l-4 border-gray-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy & Policy</h2>
                <div className="space-y-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700">10.1 All personal and sensitive information must be handled with strict confidentiality.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700">10.2 Data collection must be limited to what is necessary for legitimate NGO operations.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700">10.3 Employees must not disclose private information without prior consent.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700">10.4 All digital storage systems must comply with data protection regulations.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700">10.5 Breach of privacy policies may result in disciplinary actions including termination.</p>
                  </div>
                </div>
              </section>

              <section className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Acknowledgment</h2>
                <p className="text-gray-700 mb-4">
                  I, ____________________________, have read and understood the above policies.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p className="text-gray-700">Signature: _____________________</p>
                  </div>
                  <div>
                    <p className="text-gray-700">Date: ________________</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
