
import { Link } from 'react-router-dom';
import { Shield, Users, Scale, Heart, ArrowRight, Target, Activity, Phone, Mail, Instagram, Youtube, CheckCircle, Award, Globe, Zap } from 'lucide-react';
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
      description: "Cutting-edge research in cybersecurity and digital safety technologies including AI-powered solutions"
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Community Engagement",
      description: "Building stronger, safer digital communities through outreach and awareness programs"
    }
  ];

  const stats = [
    { number: "3000+", label: "Students Reached", icon: <Users className="h-6 w-6" /> },
    { number: "50+", label: "Awareness Sessions", icon: <Target className="h-6 w-6" /> },
    { number: "100+", label: "Legal Cases Supported", icon: <Scale className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Heart className="h-6 w-6" /> }
  ];

  const achievements = [
    "Awareness sessions in Medipatnam St. Ann's College (3 sessions, 1000+ girls each)",
    "Session in Warangal with Balavika Sanjeev's youth group",
    "Program at Sanskriti Engineering College (900+ students)",
    "Program at Sanskriti Engineering College (800+ students)",
    "Two-session awareness at IIIT Basar for both boys and girls"
  ];

  const features = [
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "AI-Powered Solutions",
      description: "Leveraging artificial intelligence for advanced threat detection and personalized support systems"
    },
    {
      icon: <Globe className="h-12 w-12 text-green-500" />,
      title: "Global Reach",
      description: "Expanding our impact across India with localized support and culturally sensitive approaches"
    },
    {
      icon: <Award className="h-12 w-12 text-purple-500" />,
      title: "Certified Excellence",
      description: "Registered NGO with 12A, 80G certificates and DARPAN registration for transparency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 animate-pulse"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/64adea60-ddb2-4f12-8d1b-a4789617b1cb.png" 
              alt="Cyber Hope Help Initiative Foundation Logo" 
              className="h-32 w-32 mx-auto rounded-full shadow-2xl border-4 border-white/30 hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight animate-fade-in" style={{animationDelay: '0.3s'}}>
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent block mb-4">
              Cyber Hope Help
            </span>
            <span className="text-white drop-shadow-2xl">
              Initiative Foundation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
            Empowering communities through <span className="text-cyan-300 font-semibold">AI-powered cybersecurity</span>, 
            comprehensive victim support, and innovative digital safety education across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{animationDelay: '0.9s'}}>
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              <Link to="/about">
                Discover Our Impact <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 shadow-2xl px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300">
              <Link to="/join">Join the Revolution</Link>
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{animationDelay: '1.2s'}}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 group"
              >
                <div className="text-cyan-300 mb-3 flex justify-center group-hover:animate-pulse">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transforming Digital Safety
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              CYBERHOPE HELP INITIATIVE FOUNDATION is a registered non-profit organization in New Delhi 
              (RegNo: TS/2024/0397972 with 12A,80G darpan certificate) revolutionizing cybercrime awareness, 
              online safety education, and digital mental health support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center relative z-10">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl text-gray-800 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-red-50 to-pink-100 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 p-4 rounded-full bg-red-100 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-16 w-16 text-red-500 mx-auto" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Victim Support</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive support for victims of cybercrime, legal issues, drug control, and child labor with 24/7 assistance and AI-powered guidance
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-cyan-100 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 p-4 rounded-full bg-blue-100 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-16 w-16 text-blue-500 mx-auto" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Awareness Campaigns</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 leading-relaxed">
                  Promoting cybersecurity through media, films, camps, videos, and social media outreach with specialized consulting services
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-emerald-100 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 p-4 rounded-full bg-green-100 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-16 w-16 text-green-500 mx-auto" />
                </div>
                <CardTitle className="text-2xl text-gray-800">AI-Powered Innovation</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 leading-relaxed">
                  Using AI tools for training programs, online support systems, and mental health support for individuals with suicidal thoughts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section with Visual Appeal */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Milestone Achievements
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our impactful programs reaching thousands across educational institutions and communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:animate-pulse">
                    {index + 1}
                  </div>
                  <div>
                    <CheckCircle className="h-6 w-6 text-green-400 mb-3" />
                    <p className="text-blue-100 leading-relaxed font-medium">{achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Activities */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500 group">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center group-hover:text-blue-600 transition-colors">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                Our Mission & Collaboration
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300">
                  <Scale className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">
                    Collaborate with government agencies, law enforcement bodies, technology companies, cybersecurity firms, legal experts, and academic institutions
                  </p>
                </div>
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 hover:shadow-lg transition-all duration-300">
                  <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">
                    Diversify revenue streams through creative funding opportunities while ensuring financial stability and mission fulfillment
                  </p>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-purple-100 hover:shadow-3xl transition-all duration-500 group">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center group-hover:text-purple-600 transition-colors">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="h-8 w-8 text-purple-600" />
                </div>
                Our Activities
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {activities.map((activity, index) => (
                  <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {activity.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{activity.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-blue-100">We're here to help. Reach out to us anytime.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
              <div className="mx-auto mb-6 p-4 bg-blue-500/20 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-12 w-12 text-cyan-300" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-white">Call Us</h3>
              <p className="text-blue-200 text-lg">9849606691</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
              <div className="mx-auto mb-6 p-4 bg-green-500/20 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-12 w-12 text-green-300" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-white">Email Us</h3>
              <p className="text-blue-200 text-lg">info@chhif.org</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
              <div className="mx-auto mb-6 p-4 bg-pink-500/20 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                <Instagram className="h-12 w-12 text-pink-300" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-white">Follow Us</h3>
              <p className="text-blue-200 text-lg">@chhifngo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 drop-shadow-2xl">Join Our Revolution Today</h2>
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Be part of the solution. Help us create a safer digital world for everyone through innovative AI-powered solutions and comprehensive support systems. Your impact matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              <Link to="/join">Become a Member</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl px-10 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300">
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
