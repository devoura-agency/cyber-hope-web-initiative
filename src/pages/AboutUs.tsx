
import { Shield, Target, Activity, Heart, Users, Scale, TrendingUp, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const objectives = [
    "NGO aiming to focus on the victims of the cyber crimes and to create awareness",
    "Aims to address societal needs through its mission, objectives, and activities",
    "Diversifies revenue streams to ensure financial stability and fulfill its mission",
    "Supports victims of Cybercrime, Legal Cell, Drug Control Board, Narcotic Drugs, and Child Labour",
    "Promotes cybersecurity awareness through various channels (PRO Media Houses, short films, camps, videos, songs, social media, YouTube, software development apps)"
  ];

  const missions = [
    {
      icon: <Scale className="h-6 w-6 text-blue-600" />,
      text: "Provides legal aid and financial assistance to the victims of the cyber crime"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      text: "Promote awareness and education to prevent future incidents"
    }
  ];

  const activities = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Education and Training",
      description: "Comprehensive cybersecurity education programs and professional training sessions"
    },
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: "Legal Aid Services",
      description: "Professional legal support and guidance for cybercrime victims"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Research and Innovation",
      description: "Cutting-edge research in cybersecurity technologies and methodologies"
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Community Engagement",
      description: "Active community outreach and engagement programs"
    }
  ];

  const revenueStreams = [
    {
      icon: <Heart className="h-6 w-6 text-green-600" />,
      title: "Fund Raising Events",
      description: "Organized events to raise funds for our initiatives"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "Corporate Sponsorships",
      description: "Partnerships with corporations for mutual benefit"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      title: "Grants and Donations",
      description: "Government grants and public donations"
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Consulting Services",
      description: "Professional cybersecurity consulting"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Free Services",
      description: "Community service initiatives"
    },
    {
      icon: <Target className="h-6 w-6 text-green-600" />,
      title: "Membership Programs",
      description: "Structured membership with benefits"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Foundation</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Learn more about our mission, objectives, and commitment to creating a safer digital world
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The Cyber Hope Help Initiative Foundation is a dedicated NGO committed to supporting victims 
              of cybercrime and creating widespread awareness about digital safety and security.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Objectives</h3>
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-blue-600 text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Impact Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Cybercrime Support</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Scale className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Legal Cell</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Heart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Drug Control</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Child Labour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              We are committed to making a real difference in the fight against cybercrime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missions.map((mission, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    {mission.icon}
                    <CardTitle className="text-lg">Mission {index + 1}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{mission.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Activities</h2>
            <p className="text-lg text-gray-600">
              Comprehensive programs designed to address cybersecurity challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{activity.icon}</div>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Revenue Generation Approach</h2>
            <p className="text-lg text-gray-600">
              Diversified revenue streams to ensure financial stability and mission fulfillment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {revenueStreams.map((stream, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    {stream.icon}
                    <CardTitle className="text-lg">{stream.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{stream.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
