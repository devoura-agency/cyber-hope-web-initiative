
import { useState, useEffect } from 'react';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ChevronLeft, ChevronRight, Shield, Users, Heart, Target, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';

interface Activity {
  id: string;
  title: string;
  date: string;
  location: string;
  participants: number;
  description: string;
  images: string[];
  tag: string;
  createdAt: string;
}

const Index = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
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
      setActivities(activitiesData);
    } catch (error) {
      console.error('Error fetching activities:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
  };

  useEffect(() => {
    if (activities.length > 0) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [activities.length]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-12 w-12 text-blue-200" />
                <span className="font-bold text-2xl">CHHIF</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Creating a
                <span className="text-blue-200 block">Safer Digital</span>
                World Together
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                Cyber Hope Help Initiative Foundation is dedicated to supporting victims of cybercrime 
                and creating awareness about cyber security through comprehensive programs and community support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg">
                  Join Our Mission
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 text-lg">
                  Get Help Now
                </Button>
              </div>
            </div>

            {/* Right Carousel */}
            <div className="relative">
              {loading ? (
                <div className="bg-white/10 rounded-xl p-8 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p>Loading recent activities...</p>
                </div>
              ) : activities.length > 0 ? (
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                  <div className="relative h-80">
                    <img
                      src={activities[currentSlide]?.images[0]}
                      alt={activities[currentSlide]?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <Badge className="mb-2 bg-blue-600">
                        {activities[currentSlide]?.tag}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">
                        {activities[currentSlide]?.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-200">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{new Date(activities[currentSlide]?.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{activities[currentSlide]?.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-white" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-white" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {activities.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white/10 rounded-xl p-8 text-center">
                  <p>No recent activities to display</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to building a safer digital environment through education, support, and advocacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Support Victims</h3>
                <p className="text-gray-600">
                  Providing comprehensive support and resources to cybercrime victims, helping them recover and rebuild their digital security.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Raise Awareness</h3>
                <p className="text-gray-600">
                  Educating communities about cyber threats, prevention strategies, and best practices for digital safety and security.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Build Community</h3>
                <p className="text-gray-600">
                  Creating a strong network of supporters, volunteers, and advocates working together for a safer digital world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      <Footer />
    </div>
  );
};

export default Index;
