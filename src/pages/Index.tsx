
import { Link } from 'react-router-dom';
import { Shield, Users, Scale, Heart, ArrowRight, Target, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const activities = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Education & Training",
      description: "Comprehensive cybersecurity awareness programs and training sessions"
    },
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: "Legal Aid",
      description: "Professional legal support and assistance for cybercrime victims"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Research & Innovation",
      description: "Cutting-edge research in cybersecurity and digital safety"
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Community Engagement",
      description: "Building stronger, safer digital communities through outreach"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-20 w-20 text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Cyber Hope Help Initiative Foundation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Protecting victims of cybercrime and creating awareness for a safer digital world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link to="/join">Join Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Foundation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are an NGO focused on supporting victims of cybercrime while creating widespread awareness 
              about digital safety and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Victim Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive support for victims of cybercrime, legal issues, drug control, and child labor
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Awareness Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Promoting cybersecurity through media, films, camps, videos, and social media outreach
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Building stronger communities through education, training, and sustainable revenue initiatives
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Scale className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Provide legal aid and financial assistance to victims of cybercrime
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Promote awareness and education to prevent future incidents
                  </p>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Activities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activities.map((activity, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-2">
                      {activity.icon}
                      <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission Today</h2>
          <p className="text-xl mb-8 text-blue-100">
            Be part of the solution. Help us create a safer digital world for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/join">Become a Member</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
