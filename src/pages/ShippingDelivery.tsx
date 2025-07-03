
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Package, MapPin, Clock } from 'lucide-react';

const ShippingDelivery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100">
      <Navbar />
      
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-purple-600 p-4 rounded-full">
                <Truck className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Shipping & Delivery Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Information about our shipping and delivery processes for membership materials and merchandise.
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
                  <Package className="h-6 w-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">What We Ship</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We ship various materials and merchandise to our members and supporters:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Membership certificates and ID cards</li>
                    <li>• Educational materials and resources</li>
                    <li>• Promotional merchandise and gifts</li>
                    <li>• Event tickets and programs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Shipping Areas</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We currently provide shipping services to the following areas:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• All major cities in India</li>
                    <li>• Rural areas with reliable postal service</li>
                    <li>• International shipping for select items</li>
                    <li>• Express delivery in metro cities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Delivery Timeline</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Estimated delivery times based on location and shipping method:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Metro cities: 3-5 business days</li>
                    <li>• Tier 2 cities: 5-7 business days</li>
                    <li>• Rural areas: 7-10 business days</li>
                    <li>• International: 15-21 business days</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="shadow-lg border-0 bg-purple-50">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Questions?</h2>
                <p className="text-gray-600 mb-6">
                  Contact us for any queries regarding shipping and delivery.
                </p>
                <div className="text-purple-600 font-semibold">
                  Email: shipping@chhif.org
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

export default ShippingDelivery;
