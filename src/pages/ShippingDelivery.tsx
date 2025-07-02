
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ShippingDelivery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping & Delivery Policy</h1>
            <p className="text-lg text-gray-600">
              Cyberhope Help Initiative Foundation - Membership Materials and Resource Delivery
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                This Shipping & Delivery Policy outlines the terms and procedures for delivering 
                membership materials, educational resources, and other physical items to members and 
                beneficiaries of Cyberhope Help Initiative Foundation (CyberHelps).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Delivered Items</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Membership Kit</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Membership ID Card (plastic card with photo and UID)</li>
                    <li>CyberHelps branded T-shirt (size as specified during registration)</li>
                    <li>Membership certificate</li>
                    <li>Welcome brochure and safety guidelines booklet</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2 Educational Materials</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Cybersecurity awareness handbooks</li>
                    <li>Emergency contact cards</li>
                    <li>Digital safety checklists</li>
                    <li>Training session certificates (post-completion)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.3 Software Access Cards</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>TRINETRA Anti-Hacking Software activation codes</li>
                    <li>Nigha App premium access credentials</li>
                    <li>Digital certificate access information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Areas</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1 Primary Coverage</h3>
                  <p className="text-gray-700">
                    We provide shipping services across India with special focus on:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                    <li>Telangana and Andhra Pradesh (home states)</li>
                    <li>Major metropolitan cities</li>
                    <li>Educational institutions where we conduct programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3.2 Remote Areas</h3>
                  <p className="text-gray-700">
                    Delivery to remote or hard-to-reach areas may take additional time and 
                    might incur extra charges based on courier partner policies.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Delivery Timeline</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Processing Time</h3>
                  <p className="text-gray-700">
                    Membership kits are processed within 3-5 business days after payment confirmation 
                    and completion of all required documentation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.2 Shipping Duration</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Within Telangana/Andhra Pradesh:</strong> 2-4 business days</li>
                    <li><strong>Major cities across India:</strong> 4-6 business days</li>
                    <li><strong>Remote areas:</strong> 7-10 business days</li>
                    <li><strong>Special circumstances:</strong> Up to 15 business days</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.3 Bulk Deliveries</h3>
                  <p className="text-gray-700">
                    For institutional memberships or bulk orders (10+ members), 
                    delivery may take 7-14 business days depending on customization requirements.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Shipping Charges</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 Standard Membership</h3>
                  <p className="text-gray-700">
                    Shipping charges for membership kits are included in the membership fee for standard delivery.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5.2 Express Delivery</h3>
                  <p className="text-gray-700">
                    Express delivery (1-2 business days) available for additional ₹150 in major cities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5.3 Remote Area Surcharge</h3>
                  <p className="text-gray-700">
                    Remote area deliveries may incur additional charges of ₹50-100 based on location.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Address Requirements</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">6.1 Complete Address</h3>
                  <p className="text-gray-700">
                    Please provide complete address including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                    <li>Full name of recipient</li>
                    <li>Complete postal address with PIN code</li>
                    <li>Mobile number for delivery coordination</li>
                    <li>Landmark for easy identification</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">6.2 Address Verification</h3>
                  <p className="text-gray-700">
                    We may contact members to verify delivery address before dispatch to avoid delays.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">6.3 Address Changes</h3>
                  <p className="text-gray-700">
                    Address changes after dispatch may incur additional charges and cause delivery delays.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Delivery Process</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">7.1 Tracking Information</h3>
                  <p className="text-gray-700">
                    Tracking details will be shared via SMS and email once the package is dispatched.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">7.2 Delivery Confirmation</h3>
                  <p className="text-gray-700">
                    Recipients must provide valid ID proof during delivery and sign the delivery receipt.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">7.3 Failed Delivery</h3>
                  <p className="text-gray-700">
                    In case of failed delivery attempts, packages will be held at the local courier office 
                    for 7 days before being returned to our office.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Packaging Standards</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">8.1 Secure Packaging</h3>
                  <p className="text-gray-700">
                    All items are securely packaged to prevent damage during transit using appropriate padding and protection.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">8.2 Eco-Friendly Materials</h3>
                  <p className="text-gray-700">
                    We use recyclable and eco-friendly packaging materials wherever possible.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">8.3 Branded Packaging</h3>
                  <p className="text-gray-700">
                    Packages are clearly marked with CyberHelps branding for easy identification.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Issues and Resolution</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">9.1 Damaged Items</h3>
                  <p className="text-gray-700">
                    Report damaged items within 24 hours of delivery with photographs. 
                    Replacement will be arranged at no additional cost.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">9.2 Lost Packages</h3>
                  <p className="text-gray-700">
                    We will track and trace lost packages in coordination with courier partners. 
                    Replacement packages will be dispatched after confirmation of loss.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">9.3 Incorrect Items</h3>
                  <p className="text-gray-700">
                    If incorrect items are delivered, please contact us immediately. 
                    We will arrange return pickup and send the correct items.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact for Shipping Queries</h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  For shipping and delivery related queries:
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> shipping@chhif.org<br />
                  <strong>Phone:</strong> 9849606691<br />
                  <strong>WhatsApp:</strong> Available for delivery status updates<br />
                  <strong>Working Hours:</strong> Monday to Saturday, 9:00 AM to 6:00 PM
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Policy Updates</h2>
              <p className="text-gray-700">
                This Shipping & Delivery Policy may be updated based on operational requirements 
                and courier partner changes. Members will be notified of significant changes 
                affecting their deliveries.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingDelivery;
