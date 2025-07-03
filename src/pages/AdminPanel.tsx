
import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trash2, Eye, Users, Calendar, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdminAuth from '@/components/admin/AdminAuth';
import MemberForm from '@/components/admin/MemberForm';
import ActivityForm from '@/components/admin/ActivityForm';
import TestimonialForm from '@/components/admin/TestimonialForm';
import MembersList from '@/components/admin/MembersList';

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

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isAuthenticated) {
      fetchActivities();
    }
  }, [isAuthenticated]);

  const fetchActivities = async () => {
    try {
      setLoading(true);
      const activitiesRef = collection(db, 'activities');
      const querySnapshot = await getDocs(activitiesRef);
      const activitiesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Activity[];
      setActivities(activitiesData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    } catch (error) {
      console.error('Error fetching activities:', error);
      toast({
        title: "Error",
        description: "Failed to fetch activities",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteActivity = async (activityId: string) => {
    if (window.confirm('Are you sure you want to delete this activity?')) {
      try {
        await deleteDoc(doc(db, 'activities', activityId));
        setActivities(activities.filter(activity => activity.id !== activityId));
        toast({
          title: "Success",
          description: "Activity deleted successfully",
        });
      } catch (error) {
        console.error('Error deleting activity:', error);
        toast({
          title: "Error",
          description: "Failed to delete activity",
          variant: "destructive"
        });
      }
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <AdminAuth onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Panel</h1>
            <p className="text-lg text-gray-600">Manage your organization's content and members</p>
          </div>

          <Tabs defaultValue="activities" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="add-member">Add Member</TabsTrigger>
            </TabsList>

            <TabsContent value="activities" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Activities Management</h2>
                <div className="space-x-4">
                  <Button onClick={fetchActivities} variant="outline">
                    Refresh
                  </Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Add New Activity</CardTitle>
                  <CardDescription>Create a new activity to showcase your organization's work</CardDescription>
                </CardHeader>
                <CardContent>
                  <ActivityForm />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Existing Activities ({activities.length})</CardTitle>
                  <CardDescription>Manage your published activities</CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                      <p className="mt-4 text-gray-600">Loading activities...</p>
                    </div>
                  ) : activities.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-600">No activities found. Add your first activity above.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {activities.map((activity) => (
                        <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                          <div className="relative">
                            <img
                              src={activity.images[0]}
                              alt={activity.title}
                              className="w-full h-32 object-cover rounded-t-lg"
                            />
                            <Badge className="absolute top-2 left-2 bg-blue-600">
                              {activity.tag}
                            </Badge>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{activity.title}</h3>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{activity.description}</p>
                            
                            <div className="space-y-1 text-xs text-gray-500 mb-4">
                              <div className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{new Date(activity.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                <span>{activity.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="h-3 w-3 mr-1" />
                                <span>{activity.participants} participants</span>
                              </div>
                            </div>

                            <div className="flex space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => window.open(`/gallery`, '_blank')}
                              >
                                <Eye className="h-3 w-3 mr-1" />
                                View
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleDeleteActivity(activity.id)}
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Delete
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="members">
              <MembersList />
            </TabsContent>

            <TabsContent value="testimonials">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Testimonial</CardTitle>
                  <CardDescription>Add video testimonials from satisfied clients and supporters</CardDescription>
                </CardHeader>
                <CardContent>
                  <TestimonialForm />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="add-member">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Member</CardTitle>
                  <CardDescription>Register a new member directly through the admin panel</CardDescription>
                </CardHeader>
                <CardContent>
                  <MemberForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminPanel;
