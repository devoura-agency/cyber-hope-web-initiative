
import { Link } from 'react-router-dom';
import { Shield, Users, Scale, Heart, ArrowRight, CheckCircle, Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const stats = [
    { number: "3000+", label: "Students Reached", icon: <Users className="h-6 w-6" /> },
    { number: "50+", label: "Awareness Sessions", icon: <Shield className="h-6 w-6" /> },
    { number: "100+", label: "Legal Cases Supported", icon: <Scale className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Heart className="h-6 w-6" /> }
  ];

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity Awareness",
      description: "Educational programs and training sessions for digital safety across institutions and communities.",
      features: ["Digital Safety Training", "Institutional Programs", "Community Workshops"]
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Legal Support",
      description: "Professional legal aid and consultation for cybercrime victims with expert guidance.",
      features: ["Legal Consultation", "Case Support", "Expert Guidance"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Victim Assistance",
      description: "24/7 support services for those affected by cybercrime, including mental health resources.",
      features: ["24/7 Support", "Mental Health Care", "Recovery Assistance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Logo and Title */}
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/64adea60-ddb2-4f12-8d1b-a4789617b1cb.png" 
                  alt="CHHIF Logo" 
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Cyber Hope</h1>
                  <p className="text-slate-600">Help Initiative Foundation</p>
                  <p className="text-sm text-slate-500">RegNo: TS/2024/0397972 | 12A & 80G Certified</p>
                </div>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Protecting Communities from 
                  <span className="text-blue-600"> Cyber Threats</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Empowering individuals and organizations through education, legal support, 
                  and victim assistance in the digital age.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                  <Link to="/contact">
                    Report Crime
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-80 h-80 mx-auto">
                  {/* Minimalist cyber security visual */}
                  <div className="absolute inset-0 border-2 border-blue-200 rounded-full"></div>
                  <div className="absolute inset-8 border border-blue-300 rounded-full"></div>
                  <div className="absolute inset-16 border border-blue-100 rounded-full"></div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="p-8 bg-blue-600 rounded-full">
                      <Shield className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  
                  {/* Floating icons */}
                  <div className="absolute top-8 right-8 p-3 bg-blue-100 rounded-full">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="absolute bottom-8 left-8 p-3 bg-green-100 rounded-full">
                    <Scale className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="absolute top-1/2 right-0 p-3 bg-red-100 rounded-full">
                    <Heart className="h-5 w-5 text-red-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-blue-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive support and education to build a safer digital ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-blue-50 rounded-full w-fit text-blue-600">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-slate-500">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Building Safer Digital Communities
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                CHHIF is a registered NGO dedicated to combating cybercrime through education, 
                legal support, and community empowerment. We work with government agencies and 
                technology companies to create a safer digital world.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-700">12A & 80G Certified</span>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Government Recognized</span>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Expert Legal Team</span>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-700">24/7 Support</span>
                </div>
              </div>

              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/about">Learn About Our Mission</Link>
              </Button>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                  <p className="text-slate-600">3 awareness sessions at Medipatnam St. Ann's College (3000+ girls)</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                  <p className="text-slate-600">Youth engagement session in Warangal</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                  <p className="text-slate-600">Training at Sanskriti Engineering College (1700+ students)</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                  <p className="text-slate-600">Comprehensive program at IIIT Basar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Need Help? We're Here 24/7</h2>
            <p className="text-xl text-slate-300">Don't face cybercrime alone - reach out to our expert team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 border border-slate-700 rounded-lg">
              <div className="p-3 bg-blue-600 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Emergency Helpline</h3>
              <p className="text-2xl font-bold text-blue-400 mb-2">9849606691</p>
              <p className="text-slate-300 text-sm">Available 24/7 for urgent cases</p>
            </div>
            
            <div className="text-center p-6 border border-slate-700 rounded-lg">
              <div className="p-3 bg-green-600 rounded-full w-fit mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-2xl font-bold text-green-400 mb-2">info@chhif.org</p>
              <p className="text-slate-300 text-sm">Detailed case submissions</p>
            </div>
            
            <div className="text-center p-6 border border-slate-700 rounded-lg">
              <div className="p-3 bg-pink-600 rounded-full w-fit mx-auto mb-4">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <p className="text-2xl font-bold text-pink-400 mb-2">@chhifngo</p>
              <p className="text-slate-300 text-sm">Stay updated with latest news</p>
            </div>
          </div>

          <div className="text-center bg-slate-800 rounded-lg p-12">
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Together, we can build a safer digital world. Whether you're seeking help or want to contribute to our cause.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/join">Become a Volunteer</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
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
