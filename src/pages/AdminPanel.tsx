
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, Activity, LogOut } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdminAuth from '@/components/admin/AdminAuth';
import ActivityForm from '@/components/admin/ActivityForm';
import MemberForm from '@/components/admin/MemberForm';
import MembersList from '@/components/admin/MembersList';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminAuth onAuthSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div className="text-center flex-1">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Panel</h1>
              <p className="text-lg text-gray-600">Manage activities and members</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>

          <Tabs defaultValue="activities" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="activities" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Activities
              </TabsTrigger>
              <TabsTrigger value="add-member" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Add Member
              </TabsTrigger>
              <TabsTrigger value="manage-members" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Manage Members
              </TabsTrigger>
            </TabsList>

            <TabsContent value="activities">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Activity</CardTitle>
                  <CardDescription>Upload activities to showcase your work (use image links for now)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ActivityForm />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="add-member">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Member</CardTitle>
                  <CardDescription>Register new members with unique UID (use image links for profile pictures)</CardDescription>
                </CardHeader>
                <CardContent>
                  <MemberForm />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="manage-members">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Members</CardTitle>
                  <CardDescription>View and update member information</CardDescription>
                </CardHeader>
                <CardContent>
                  <MembersList />
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
