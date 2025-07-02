
import { useState } from 'react';
import { AlertTriangle, Heart, Shield, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Donation = () => {
  const [amount, setAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleDonation = () => {
    // Razorpay integration will be added here once API key is provided
    console.log('Donation initiated:', { amount, donorName, email, phone });
    alert('Razorpay integration will be implemented once API key is provided');
  };

  const donationImpacts = [
    { amount: '₹500', impact: 'Cybersecurity training for 5 students' },
    { amount: '₹1,000', impact: 'One awareness session in a school' },
    { amount: '₹2,500', impact: 'Legal support for one cybercrime victim' },
    { amount: '₹5,000', impact: 'Complete safety kit for vulnerable individuals' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/64adea60-ddb2-4f12-8d1b-a4789617b1cb.png" 
              alt="CHHIF Logo" 
              className="h-16 w-16 rounded-full border-2 border-blue-400 mr-4"
            />
            <div>
              <h1 className="text-3xl font-bold">Support Our Mission</h1>
              <p className="text-blue-300">Help us create safer digital communities</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your donation helps us fight cybercrime, educate communities, and support victims. 
            Together, we can build a safer digital world for everyone.
          </p>
        </div>
      </section>

      {/* Tax Exemption Alert */}
      <section className="py-8 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-6">
          <Alert className="border-yellow-400 bg-yellow-50">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <AlertDescription className="text-yellow-800 font-medium">
              <strong>Tax Benefit:</strong> Enjoy 50% tax exemption on donations to our NGO. 
              We are officially registered (RegNo: TS/2024/0397972) with 12A & 80G certification.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Make a Donation</CardTitle>
                <CardDescription className="text-center">
                  Every contribution makes a difference in creating safer digital communities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="amount">Donation Amount (₹)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setAmount('500')}
                    className={amount === '500' ? 'bg-blue-50 border-blue-500' : ''}
                  >
                    ₹500
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setAmount('1000')}
                    className={amount === '1000' ? 'bg-blue-50 border-blue-500' : ''}
                  >
                    ₹1,000
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setAmount('2500')}
                    className={amount === '2500' ? 'bg-blue-50 border-blue-500' : ''}
                  >
                    ₹2,500
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setAmount('5000')}
                    className={amount === '5000' ? 'bg-blue-50 border-blue-500' : ''}
                  >
                    ₹5,000
                  </Button>
                </div>

                <div>
                  <Label htmlFor="donorName">Full Name</Label>
                  <Input
                    id="donorName"
                    type="text"
                    placeholder="Enter your full name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <Button 
                  onClick={handleDonation} 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                  disabled={!amount || !donorName || !email}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Now via Razorpay
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  Secure payment powered by Razorpay. Your donation receipt will be sent via email.
                </p>
              </CardContent>
            </Card>

            {/* Impact Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h3>
                <div className="space-y-4">
                  {donationImpacts.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-blue-600 text-lg">{item.amount}</span>
                          <span className="text-gray-700">{item.impact}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Why Your Donation Matters</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Cybersecurity education for communities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Legal support for cybercrime victims</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700">24/7 helpline and victim assistance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donation;
