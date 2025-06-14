
import { useState } from 'react';
import { Calendar, MapPin, Users, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const events = [
    {
      id: 1,
      title: "Cybersecurity Awareness Workshop",
      date: "2024-05-15",
      location: "Delhi University",
      participants: 200,
      description: "Interactive workshop on digital safety for college students",
      image: "/placeholder.svg",
      category: "Education"
    },
    {
      id: 2,
      title: "Legal Aid Camp",
      date: "2024-05-10",
      location: "Community Center, Mumbai",
      participants: 150,
      description: "Free legal consultation for cybercrime victims",
      image: "/placeholder.svg",
      category: "Legal Aid"
    },
    {
      id: 3,
      title: "School Safety Program",
      date: "2024-04-28",
      location: "Government School, Bangalore",
      participants: 300,
      description: "Teaching children about online safety and cyber bullying prevention",
      image: "/placeholder.svg",
      category: "Education"
    },
    {
      id: 4,
      title: "Corporate Training Session",
      date: "2024-04-20",
      location: "Tech Park, Hyderabad",
      participants: 80,
      description: "Cybersecurity training for corporate employees",
      image: "/placeholder.svg",
      category: "Corporate"
    },
    {
      id: 5,
      title: "Women's Safety Digital Workshop",
      date: "2024-04-15",
      location: "Women's College, Pune",
      participants: 250,
      description: "Special focus on digital safety for women and girls",
      image: "/placeholder.svg",
      category: "Women Safety"
    },
    {
      id: 6,
      title: "Senior Citizens Cyber Awareness",
      date: "2024-04-05",
      location: "Senior Center, Chennai",
      participants: 100,
      description: "Helping elderly citizens understand and prevent online fraud",
      image: "/placeholder.svg",
      category: "Senior Citizens"
    }
  ];

  const achievements = [
    {
      number: "50,000+",
      label: "People Educated",
      icon: Users
    },
    {
      number: "500+",
      label: "Legal Cases Handled",
      icon: Calendar
    },
    {
      number: "100+",
      label: "Workshops Conducted",
      icon: MapPin
    },
    {
      number: "25+",
      label: "Cities Covered",
      icon: MapPin
    }
  ];

  const categories = ["All", "Education", "Legal Aid", "Corporate", "Women Safety", "Senior Citizens"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact Gallery</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Witness the positive change we're creating through our cybersecurity awareness programs and legal aid initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600">Making a difference in the digital safety landscape</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <achievement.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Gallery</h2>
            <p className="text-lg text-gray-600">
              Explore photos and highlights from our various programs and initiatives
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                    onClick={() => setSelectedImage(event)}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedImage.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>{selectedImage.participants} participants</span>
                  </div>
                </div>
                <p className="text-gray-700">{selectedImage.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
