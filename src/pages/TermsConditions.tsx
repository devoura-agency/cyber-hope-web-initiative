
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Scale, Users, AlertCircle } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />
      
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-green-600 p-4 rounded-full">
                <Scale className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: January 2024
            </div>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    By accessing and using our website and services, you accept and agree to be bound by 
                    the terms and provision of this agreement.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• These terms apply to all visitors and users</li>
                    <li>• You must be at least 18 years old to use our services</li>
                    <li>• You agree to provide accurate information</li>
                    <li>• You are responsible for maintaining account security</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">User Responsibilities</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    As a user of our services, you agree to comply with all applicable laws and regulations.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Use services only for lawful purposes</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Do not engage in harmful or disruptive activities</li>
                    <li>• Maintain confidentiality of account credentials</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-6 w-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our liability is limited to the maximum extent permitted by law.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Services provided "as is" without warranties</li>
                    <li>• We are not liable for indirect damages</li>
                    <li>• Users assume responsibility for their actions</li>
                    <li>• Technical issues may occur despite our best efforts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="shadow-lg border-0 bg-green-50">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Terms?</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about these Terms & Conditions, please contact us.
                </p>
                <div className="text-green-600 font-semibold">
                  Email: legal@chhif.org
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
