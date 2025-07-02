
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Activity } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ActivityForm from '@/components/admin/ActivityForm';
import MemberForm from '@/components/admin/MemberForm';
import MembersList from '@/components/admin/MembersList';

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Panel</h1>
            <p className="text-lg text-gray-600">Manage activities and members</p>
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
                  <CardDescription>Upload activities to showcase your work</CardDescription>
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
                  <CardDescription>Register new members with unique UID</CardDescription>
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
