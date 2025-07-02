
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Shield, Award, Users, Phone, Mail, Zap, Gift, Heart, BookOpen, UserCheck, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PremiumMembership = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const membershipPlans = [
    {
      id: 'student',
      name: 'Student',
      price: '₹299',
      duration: '2 Months',
      description: 'Perfect for students and young professionals',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'bg-green-500',
      popular: false
    },
    {
      id: 'employee',
      name: 'Employee',
      price: '₹999',
      duration: '2 Months',
      description: 'Ideal for working professionals',
      icon: <Users className="h-8 w-8" />,
      color: 'bg-blue-500',
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      price: '₹4,999',
      duration: '2 Months',
      description: 'Comprehensive plan for business owners',
      icon: <Award className="h-8 w-8" />,
      color: 'bg-purple-500',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Cyber Crime Awareness Coaching",
      description: "Professional training sessions on digital safety"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "TRINETRA Anti-Hacking Software",
      description: "Free premium security software for personal use"
    },
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "Volunteer Role as Cyber Helps Member",
      description: "Official volunteer status with recognition"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Nigha App (Free for Girls)",
      description: "Safety app with emergency features"
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Membership ID Card & T-Shirt",
      description: "Official membership materials"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Monthly Cyber Safety Tips PDF",
      description: "Regular updates and scam alerts in your preferred language"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Free Access to 2 Cyber Security Webinars",
      description: "Exclusive sessions by ethical hackers and cyber cops"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "₹500 Discount on Paid Cyber Courses",
      description: "Discount on advanced ethical hacking certifications"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "SOS Emergency Helpline Access",
      description: "24/7 digital help desk for online abuse or threats"
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Digital Certificate of Membership",
      description: "Useful for college students and job applicants"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Exclusive Member WhatsApp Group",
      description: "Real-time crime alerts and direct team interaction"
    },
    {
      icon: <Gift className="h-5 w-5" />,
      title: "Priority Entry in NGO Programs",
      description: "First preference in internship and volunteering programs"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Early Access to Newsletters",
      description: "Insider stories and awareness content"
    },
    {
      icon: <Gift className="h-5 w-5" />,
      title: "Annual Lucky Draw",
      description: "Rewards for active volunteers with gift hampers and gadgets"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Health Insurance Card",
      description: "Basic health coverage for members"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Insurance Card",
      description: "Coverage for digital security incidents"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Priority in Awareness Programs",
      description: "First preference when conducting awareness sessions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Star className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Membership Plans</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Join our premium membership and unlock exclusive benefits to enhance your cybersecurity journey
            </p>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                } ${selectedPlan === plan.id ? 'ring-2 ring-green-500' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${plan.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/ {plan.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Button 
                    className="w-full mb-6"
                    variant={selectedPlan === plan.id ? "default" : "outline"}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </Button>
                  
                  <div className="text-center text-sm text-gray-600">
                    All benefits included in this plan
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Benefits Package</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every membership plan includes all these amazing benefits to support your cybersecurity journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of members who are already part of our cybersecurity community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/join">Join Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PremiumMembership;
