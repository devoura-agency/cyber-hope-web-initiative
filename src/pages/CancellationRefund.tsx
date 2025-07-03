
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCcw, CreditCard, Clock, HelpCircle } from 'lucide-react';

const CancellationRefund = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <Navbar />
      
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-red-600 p-4 rounded-full">
                <RotateCcw className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cancellation & Refund Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand our policies regarding cancellations and refunds for donations and memberships.
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
                  <CreditCard className="h-6 w-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Donation Refunds</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We understand that sometimes circumstances change. Here's our policy on donation refunds:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Refund requests must be made within 30 days</li>
                    <li>• Donations are generally non-refundable once processed</li>
                    <li>• Exceptional circumstances will be considered case by case</li>
                    <li>• Processing fees may be deducted from refunds</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Membership Cancellation</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Members may cancel their membership at any time with the following conditions:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Written notice required 30 days in advance</li>
                    <li>• Annual memberships are non-refundable after 30 days</li>
                    <li>• Monthly memberships can be cancelled anytime</li>
                    <li>• Benefits cease at the end of the billing period</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <HelpCircle className="h-6 w-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Refund Process</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you qualify for a refund, here's how the process works:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Submit refund request via email or contact form</li>
                    <li>• Provide transaction details and reason for refund</li>
                    <li>• Allow 7-10 business days for processing</li>
                    <li>• Refunds processed to original payment method</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="shadow-lg border-0 bg-red-50">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Refunds?</h2>
                <p className="text-gray-600 mb-6">
                  Contact our support team for assistance with cancellations and refunds.
                </p>
                <div className="text-red-600 font-semibold">
                  Email: refunds@chhif.org
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

export default CancellationRefund;
