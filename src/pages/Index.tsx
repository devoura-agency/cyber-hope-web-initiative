
import { Link } from 'react-router-dom';
import { Shield, Users, Scale, Heart, ArrowRight, Target, Activity, Phone, Mail, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const activities = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Education & Training",
      description: "Comprehensive cybersecurity awareness programs and training sessions for individuals and organizations"
    },
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: "Legal Aid",
      description: "Professional legal support and assistance for cybercrime victims with expert consultation"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Research & Innovation",
      description: "Cutting-edge research in cybersecurity and digital safety technologies"
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Community Engagement",
      description: "Building stronger, safer digital communities through outreach and awareness programs"
    }
  ];

  const stats = [
    { number: "1000+", label: "Lives Impacted" },
    { number: "50+", label: "Awareness Sessions" },
    { number: "100+", label: "Legal Cases Supported" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Cg fill-opacity="0.1"%3E%3Cpolygon fill="%23fff" points="50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40"/%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <img 
                  src="/lovable-uploads/64adea60-ddb2-4f12-8d1b-a4789617b1cb.png" 
                  alt="Cyber Hope Help Initiative Foundation Logo" 
                  className="h-24 w-24 rounded-full shadow-lg border-4 border-white/20"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Cyber Hope Help
                </span>
                <br />
                <span className="text-white">Initiative Foundation</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
                Protecting victims of cybercrime and creating awareness for a safer digital world. Together, we build hope in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg">
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 shadow-lg">
                  <Link to="/join">Join Our Mission</Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-cyan-300 mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a dedicated NGO focused on supporting victims of cybercrime while creating widespread awareness 
              about digital safety and security in our interconnected world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-pink-50">
              <CardHeader>
                <Heart className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gray-800">Victim Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive support for victims of cybercrime, legal issues, drug control, and child labor with 24/7 assistance
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <Shield className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gray-800">Awareness Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Promoting cybersecurity through media, films, camps, videos, and social media outreach to educate communities
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <Users className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gray-800">Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Building stronger communities through education, training, and sustainable revenue initiatives for lasting change
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Activities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                Our Mission
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-blue-50">
                  <Scale className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">
                    Provide comprehensive legal aid and financial assistance to victims of cybercrime
                  </p>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-green-50">
                  <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">
                    Promote awareness and education to prevent future cyber incidents and protect communities
                  </p>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Activity className="h-8 w-8 text-blue-600 mr-3" />
                Our Activities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activities.map((activity, index) => (
                  <div key={index} className="p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      {activity.icon}
                      <h3 className="font-bold text-gray-900">{activity.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">We're here to help. Reach out to us anytime.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">9849606691</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@chhif.org</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors">
              <Instagram className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
              <p className="text-gray-600">@chhifngo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Mission Today</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Be part of the solution. Help us create a safer digital world for everyone. 
            Your support makes a difference in protecting communities from cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
              <Link to="/join">Become a Member</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 shadow-lg">
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
