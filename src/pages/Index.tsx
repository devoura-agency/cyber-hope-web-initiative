
import { Link } from 'react-router-dom';
import { Shield, Users, Scale, Heart, ArrowRight, Target, Activity, Phone, Mail, Instagram, CheckCircle, Award, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const stats = [
    { number: "3000+", label: "Students Reached", icon: <Users className="h-5 w-5" /> },
    { number: "50+", label: "Awareness Sessions", icon: <Target className="h-5 w-5" /> },
    { number: "100+", label: "Legal Cases Supported", icon: <Scale className="h-5 w-5" /> },
    { number: "24/7", label: "Support Available", icon: <Heart className="h-5 w-5" /> }
  ];

  const services = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Cybersecurity Awareness",
      description: "Educational programs and training sessions for digital safety across institutions and communities"
    },
    {
      icon: <Scale className="h-12 w-12 text-green-600" />,
      title: "Legal Support",
      description: "Professional legal aid and consultation for cybercrime victims with expert guidance"
    },
    {
      icon: <Heart className="h-12 w-12 text-red-600" />,
      title: "Victim Assistance",
      description: "24/7 support services for those affected by cybercrime, including mental health resources"
    }
  ];

  const achievements = [
    "3 awareness sessions at Medipatnam St. Ann's College (3000+ girls)",
    "Youth engagement session in Warangal",
    "Training at Sanskriti Engineering College (1700+ students)",
    "Comprehensive program at IIIT Basar"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Minimalist */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white min-h-screen flex items-center">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center mb-8">
                <img 
                  src="/lovable-uploads/64adea60-ddb2-4f12-8d1b-a4789617b1cb.png" 
                  alt="CHHIF Logo" 
                  className="h-16 w-16 rounded-full mr-4 border-2 border-blue-400"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    <span className="text-blue-400">Cyber Hope</span> Help Initiative
                  </h1>
                  <p className="text-blue-200 text-lg">Foundation</p>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Protecting communities from cybercrime through education, legal support, and victim assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3">
                  <Link to="/contact">Get Help Now</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 border border-slate-700 rounded-lg bg-slate-800/50">
                    <div className="flex justify-center text-blue-400 mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-96 h-96 mx-auto relative">
                  {/* Cyber security visual */}
                  <div className="absolute inset-0 border-2 border-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 border border-blue-400 rounded-full opacity-60"></div>
                  <div className="absolute inset-8 border border-blue-300 rounded-full opacity-40"></div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Shield className="h-24 w-24 text-blue-400" />
                  </div>
                  
                  {/* Floating icons */}
                  <div className="absolute top-8 right-8 p-3 bg-blue-600 rounded-full">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute bottom-8 left-8 p-3 bg-green-600 rounded-full">
                    <Scale className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 right-0 p-3 bg-red-600 rounded-full">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support and education to build a safer digital ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow border-0 bg-gray-50">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-white rounded-full shadow-md w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Safer Digital Communities
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                CHHIF is a registered NGO (RegNo: TS/2024/0397972) dedicated to combating cybercrime 
                through education, legal support, and community empowerment.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">12A & 80G Certified with DARPAN Registration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">AI-powered support systems and solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Collaboration with government and tech companies</span>
                </div>
              </div>

              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/about">Read Our Story</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need Help? Contact Us</h2>
            <p className="text-gray-300">We're here to support you 24/7</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 border border-slate-700 rounded-lg">
              <Phone className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">9849606691</p>
            </div>
            
            <div className="text-center p-6 border border-slate-700 rounded-lg">
              <Mail className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">info@chhif.org</p>
            </div>
            
            <div className="text-center p-6 border border-slate-700 rounded-lg">
              <Instagram className="h-8 w-8 text-pink-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <p className="text-gray-300">@chhifngo</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Join Our Mission</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/join">Become a Volunteer</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                <Link to="/contact">Report a Crime</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
