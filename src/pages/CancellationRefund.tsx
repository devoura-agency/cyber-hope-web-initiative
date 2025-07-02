
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CancellationRefund = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cancellation & Refund Policy</h1>
            <p className="text-lg text-gray-600">
              Cyberhope Help Initiative Foundation - Service Cancellation and Refund Guidelines
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                This Cancellation & Refund Policy outlines the terms and conditions for cancelling services 
                and requesting refunds for donations, memberships, and other services provided by 
                Cyberhope Help Initiative Foundation (CyberHelps).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Donation Refunds</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 General Policy</h3>
                  <p className="text-gray-700">
                    As donations are voluntary contributions to support our charitable activities, 
                    they are generally non-refundable once processed.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2 Exceptional Circumstances</h3>
                  <p className="text-gray-700">
                    Refunds may be considered in exceptional circumstances such as:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                    <li>Duplicate payments due to technical errors</li>
                    <li>Unauthorized transactions</li>
                    <li>Technical errors in payment processing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.3 Refund Request Timeline</h3>
                  <p className="text-gray-700">
                    Refund requests must be submitted within 7 days of the donation date with proper justification.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Membership Cancellation & Refunds</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1 Membership Plans</h3>
                  <p className="text-gray-700">
                    Our membership plans (Student: ₹299, Employee: ₹999, Business: ₹4999) are for 2-month periods.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3.2 Cancellation Policy</h3>
                  <p className="text-gray-700">
                    Members can cancel their membership within 7 days of subscription for a full refund, 
                    provided no services have been utilized.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3.3 Partial Refunds</h3>
                  <p className="text-gray-700">
                    Partial refunds may be considered on a case-by-case basis after 7 days, 
                    calculated based on unused services and administrative costs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3.4 Service Utilization</h3>
                  <p className="text-gray-700">
                    If membership benefits (training sessions, software access, consultation) have been utilized, 
                    refunds will be adjusted accordingly.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Cancellation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Training Programs</h3>
                  <p className="text-gray-700">
                    Training programs can be cancelled up to 24 hours before the scheduled session for a full refund.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.2 Consultation Services</h3>
                  <p className="text-gray-700">
                    Legal consultation and cybersecurity advisory services can be cancelled up to 12 hours 
                    before the appointment without penalty.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.3 Emergency Services</h3>
                  <p className="text-gray-700">
                    Emergency cybercrime assistance services cannot be cancelled once initiated, 
                    as immediate action is required for victim support.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Process</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 Request Submission</h3>
                  <p className="text-gray-700">
                    Refund requests must be submitted in writing to info@chhif.org with the following details:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                    <li>Transaction ID and payment receipt</li>
                    <li>Reason for refund request</li>
                    <li>Contact information</li>
                    <li>Bank account details for refund processing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5.2 Processing Timeline</h3>
                  <p className="text-gray-700">
                    Refund requests will be processed within 7-14 business days after approval. 
                    Complex cases may require additional verification time.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5.3 Refund Method</h3>
                  <p className="text-gray-700">
                    Refunds will be processed through the original payment method or bank transfer 
                    as specified in the refund request.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Non-Refundable Items</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Completed training sessions and workshops</li>
                <li>Utilized consultation hours</li>
                <li>Membership cards and promotional materials</li>
                <li>Administrative and processing fees</li>
                <li>Services rendered for emergency cybercrime assistance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Special Circumstances</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">7.1 Technical Issues</h3>
                  <p className="text-gray-700">
                    If services cannot be delivered due to technical issues on our end, 
                    full refunds or service credits will be provided.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">7.2 Force Majeure</h3>
                  <p className="text-gray-700">
                    In case of events beyond our control (natural disasters, government restrictions), 
                    service credits or rescheduling will be offered instead of monetary refunds.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Dispute Resolution</h2>
              <p className="text-gray-700">
                Any disputes regarding refunds or cancellations will be resolved through our internal 
                grievance mechanism. If unresolved, matters may be referred to appropriate consumer 
                forums or legal authorities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  For cancellation and refund requests, contact us:
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> info@chhif.org<br />
                  <strong>Phone:</strong> 9849606691<br />
                  <strong>Subject Line:</strong> "Refund Request - [Transaction ID]"
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Policy Updates</h2>
              <p className="text-gray-700">
                This Cancellation & Refund Policy may be updated periodically. Changes will be 
                communicated to members and posted on our website. Continued use of our services 
                constitutes acceptance of any policy changes.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CancellationRefund;
