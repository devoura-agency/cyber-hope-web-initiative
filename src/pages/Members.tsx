
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Users, MapPin, Calendar, Eye } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Member {
  id: string;
  uid: string;
  name: string;
  qualification: string;
  designation: string;
  location: string;
  reference: string;
  joiningDate: string;
  contributions: string;
  certificates: string;
  profileImage: string;
  referralCount: number;
}

const Members = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const membersRef = collection(db, 'members');
      const querySnapshot = await getDocs(membersRef);
      const membersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Member[];
      setMembers(membersData);
    } catch (error) {
      console.error('Error fetching members:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Members</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet the dedicated individuals who are part of our mission to create a safer digital world
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading members...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <img
                      src={member.profileImage}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                    />
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-blue-600 font-medium">{member.designation}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center text-gray-600">
                        <span className="font-medium">Qualification:</span>
                        <span className="ml-2">{member.qualification}</span>
                      </p>
                      <p className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {member.location}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        Joined: {new Date(member.joiningDate).toLocaleDateString()}
                      </p>
                      {member.reference && (
                        <p className="text-gray-600">
                          <span className="font-medium">Reference:</span> {member.reference}
                        </p>
                      )}
                    </div>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full mt-4">
                          <Eye className="h-4 w-4 mr-2" />
                          View More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{member.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="text-center">
                            <img
                              src={member.profileImage}
                              alt={member.name}
                              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                            />
                            <p className="text-blue-600 font-medium text-lg">UID: {member.uid}</p>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                              <div className="space-y-2 text-sm">
                                <p><strong>Qualification:</strong> {member.qualification}</p>
                                <p><strong>Designation:</strong> {member.designation}</p>
                                <p><strong>Location:</strong> {member.location}</p>
                                <p><strong>Joining Date:</strong> {new Date(member.joiningDate).toLocaleDateString()}</p>
                                {member.reference && <p><strong>Reference:</strong> {member.reference}</p>}
                                <p><strong>Referrals Made:</strong> {member.referralCount}</p>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Professional Details</h3>
                              {member.contributions && (
                                <div className="mb-4">
                                  <h4 className="font-medium text-gray-700 mb-1">Contributions:</h4>
                                  <p className="text-sm text-gray-600">{member.contributions}</p>
                                </div>
                              )}
                              {member.certificates && (
                                <div>
                                  <h4 className="font-medium text-gray-700 mb-1">Certificates:</h4>
                                  <p className="text-sm text-gray-600">{member.certificates}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Members;
