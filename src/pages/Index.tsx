
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Link } from 'react-router-dom';
import { Shield, Users, Scale, Heart, ArrowRight, CheckCircle, Phone, Mail, Instagram, Calendar, MapPin, Eye, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Activity {
  id: string;
  title: string;
  date: string;
  location: string;
  participants: number;
  description: string;
  images: string[];
  tag: string;
}

const Index = () => {
  const [recentActivities, setRecentActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentActivities();
  }, []);

  const fetchRecentActivities = async () => {
    try {
      const activitiesRef = collection(db, 'activities');
      const q = query(activitiesRef, orderBy('createdAt', 'desc'), limit(5));
      const querySnapshot = await getDocs(q);
      const activitiesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Activity[];
      setRecentActivities(activitiesData);
    } catch (error) {
      console.error('Error fetching activities:', error);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { number: "3000+", label: "Students Reached", icon: <Users className="h-6 w-6" /> },
    { number: "50+", label: "Awareness Sessions", icon: <Shield className="h-6 w-6" /> },
    { number: "100+", label: "Legal Cases Supported", icon: <Scale className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Heart className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/64adea60-ddb2-4f12-8d1b-a4789617b1cb.png" 
              alt="CHHIF Logo" 
              className="h-16 w-16 rounded-full border-2 border-blue-400 mr-4"
            />
            <div>
              <h1 className="text-xl font-bold">Cyber Hope Help Initiative Foundation</h1>
              <p className="text-blue-300 text-sm">RegNo: TS/2024/0397972 | 12A & 80G Certified</p>
            </div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Securing Digital
              <span className="text-blue-400 block">Communities</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Empowering individuals through cybersecurity education, legal support, and victim assistance in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link to="/donation">
                  <Gift className="mr-2 h-5 w-5" />
                  Donate Now
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/gallery">
                  <Eye className="mr-2 h-5 w-5" />
                  Activities
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                <Link to="/join">
                  <Users className="mr-2 h-5 w-5" />
                  Join Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex justify-center text-blue-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Activities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See our latest initiatives and impact in creating safer digital communities
            </p>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading activities...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentActivities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={activity.images[0]}
                      alt={activity.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                        {activity.tag}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{activity.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{activity.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(activity.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{activity.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{activity.participants} participants</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">
                <Eye className="mr-2 h-5 w-5" />
                View All Activities
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support and education to build a safer digital ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity Awareness</h3>
              <p className="text-gray-600 mb-6">Educational programs and training sessions for digital safety across institutions and communities.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Digital Safety Training
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Institutional Programs
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Community Workshops
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Support</h3>
              <p className="text-gray-600 mb-6">Professional legal aid and consultation for cybercrime victims with expert guidance.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Legal Consultation
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Case Support
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Expert Guidance
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Victim Assistance</h3>
              <p className="text-gray-600 mb-6">24/7 support services for those affected by cybercrime, including mental health resources.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  24/7 Support
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Mental Health Care
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Recovery Assistance
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Need Help? We're Here 24/7</h2>
            <p className="text-xl text-gray-300">Don't face cybercrime alone - reach out to our expert team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="p-3 bg-blue-600 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Emergency Helpline</h3>
              <p className="text-2xl font-bold text-blue-400 mb-2">9849606691</p>
              <p className="text-gray-300 text-sm">Available 24/7 for urgent cases</p>
            </div>
            
            <div className="text-center p-6 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="p-3 bg-green-600 rounded-full w-fit mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-2xl font-bold text-green-400 mb-2">info@chhif.org</p>
              <p className="text-gray-300 text-sm">Detailed case submissions</p>
            </div>
            
            <div className="text-center p-6 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="p-3 bg-pink-600 rounded-full w-fit mx-auto mb-4">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <p className="text-2xl font-bold text-pink-400 mb-2">@chhifngo</p>
              <p className="text-gray-300 text-sm">Stay updated with latest news</p>
            </div>
          </div>

          <div className="text-center bg-gray-800 rounded-lg p-12">
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Together, we can build a safer digital world. Whether you're seeking help or want to contribute to our cause.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/join">Become a Volunteer</Link>
              </Button>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Link to="/premium-membership">Premium Membership</Link>
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
