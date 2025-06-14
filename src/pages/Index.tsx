
import { Link } from 'react-router-dom';
import { Shield, Users, Scale, Heart, ArrowRight, Target, Activity, Phone, Mail, Instagram, CheckCircle, Award, Globe, Zap, Lock, Eye, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const stats = [
    { number: "3000+", label: "Students Reached", icon: <Users className="h-5 w-5" />, color: "text-blue-400" },
    { number: "50+", label: "Awareness Sessions", icon: <Target className="h-5 w-5" />, color: "text-green-400" },
    { number: "100+", label: "Legal Cases Supported", icon: <Scale className="h-5 w-5" />, color: "text-purple-400" },
    { number: "24/7", label: "Support Available", icon: <Heart className="h-5 w-5" />, color: "text-red-400" }
  ];

  const services = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Cybersecurity Awareness",
      description: "Educational programs and training sessions for digital safety across institutions and communities",
      features: ["Digital Safety Training", "Institutional Programs", "Community Workshops"]
    },
    {
      icon: <Scale className="h-12 w-12 text-green-600" />,
      title: "Legal Support",
      description: "Professional legal aid and consultation for cybercrime victims with expert guidance",
      features: ["Legal Consultation", "Case Support", "Expert Guidance"]
    },
    {
      icon: <Heart className="h-12 w-12 text-red-600" />,
      title: "Victim Assistance",
      description: "24/7 support services for those affected by cybercrime, including mental health resources",
      features: ["24/7 Support", "Mental Health Care", "Recovery Assistance"]
    }
  ];

  const achievements = [
    { text: "3 awareness sessions at Medipatnam St. Ann's College (3000+ girls)", icon: <Users className="h-4 w-4" /> },
    { text: "Youth engagement session in Warangal", icon: <Target className="h-4 w-4" /> },
    { text: "Training at Sanskriti Engineering College (1700+ students)", icon: <Award className="h-4 w-4" /> },
    { text: "Comprehensive program at IIIT Basar", icon: <Globe className="h-4 w-4" /> }
  ];

  const threats = [
    { name: "Phishing Attacks", percentage: 65 },
    { name: "Data Breaches", percentage: 45 },
    { name: "Social Engineering", percentage: 55 },
    { name: "Financial Fraud", percentage: 35 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="flex items-center mb-8 group">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/64adea60-ddb2-4f12-8d1b-a4789617b1cb.png" 
                    alt="CHHIF Logo" 
                    className="h-20 w-20 rounded-full mr-6 border-3 border-blue-400 shadow-lg shadow-blue-400/20 group-hover:shadow-blue-400/40 transition-all duration-300"
                  />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Cyber Hope
                  </h1>
                  <p className="text-2xl text-blue-200 font-medium">Help Initiative Foundation</p>
                  <p className="text-sm text-gray-400 mt-1">RegNo: TS/2024/0397972 | 12A & 80G Certified</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Protecting Communities from 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Cyber Threats</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Empowering individuals and organizations through education, legal support, and victim assistance in the digital age.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300">
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                  <Link to="/contact">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Report Crime
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="group p-6 border border-slate-700/50 rounded-xl bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
                    <div className={`flex justify-center ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{stat.number}</div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Visual Element */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-96 h-96 mx-auto relative">
                  {/* Cyber security visual with enhanced animations */}
                  <div className="absolute inset-0 border-2 border-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 border border-blue-400 rounded-full opacity-60 animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute inset-8 border border-blue-300 rounded-full opacity-40 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
                    <div className="p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-2xl shadow-blue-600/30 group-hover:shadow-blue-600/50 transition-all duration-300">
                      <Shield className="h-20 w-20 text-white" />
                    </div>
                  </div>
                  
                  {/* Enhanced floating icons */}
                  <div className="absolute top-8 right-8 p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0s' }}>
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute bottom-8 left-8 p-4 bg-gradient-to-br from-green-600 to-green-700 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                    <Scale className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 right-0 p-4 bg-gradient-to-br from-red-600 to-red-700 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute bottom-1/2 left-0 p-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '3s' }}>
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Awareness Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Cyber Threats</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the landscape of cybercrime to better protect our communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threats.map((threat, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900 group-hover:text-red-600 transition-colors">
                    {threat.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-red-600">{threat.percentage}%</span>
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${threat.percentage}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support and education to build a safer digital ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white hover:from-blue-50 hover:to-white">
                <CardHeader>
                  <div className="mx-auto mb-6 p-6 bg-white rounded-full shadow-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-500">
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

      {/* Enhanced About Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Building Safer Digital Communities
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CHHIF is a registered NGO dedicated to combating cybercrime through education, legal support, 
                and community empowerment. We leverage AI-powered solutions and collaborate with government 
                and technology companies to create a safer digital world.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">12A & 80G Certified</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">DARPAN Registration</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">AI-Powered Solutions</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Government Collaboration</span>
                </div>
              </div>

              <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold shadow-lg">
                <Link to="/about">Discover Our Mission</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Achievements</h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {achievement.icon}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Need Help? We're Here 24/7</h2>
            <p className="text-xl text-gray-300">Don't face cybercrime alone - reach out to our expert team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group text-center p-8 border border-slate-700 rounded-xl bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Helpline</h3>
              <p className="text-2xl font-bold text-blue-400 mb-2">9849606691</p>
              <p className="text-gray-300">Available 24/7 for urgent cases</p>
            </div>
            
            <div className="group text-center p-8 border border-slate-700 rounded-xl bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-green-600 to-green-700 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Support</h3>
              <p className="text-2xl font-bold text-green-400 mb-2">info@chhif.org</p>
              <p className="text-gray-300">Detailed case submissions</p>
            </div>
            
            <div className="group text-center p-8 border border-slate-700 rounded-xl bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
              <p className="text-2xl font-bold text-pink-400 mb-2">@chhifngo</p>
              <p className="text-gray-300">Stay updated with latest news</p>
            </div>
          </div>

          <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-6">Join Our Mission</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Together, we can build a safer digital world. Whether you're a victim seeking help or want to contribute to our cause.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg">
                <Link to="/join">
                  <Users className="mr-2 h-5 w-5" />
                  Become a Volunteer
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                <Link to="/contact">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Report a Crime
                </Link>
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
