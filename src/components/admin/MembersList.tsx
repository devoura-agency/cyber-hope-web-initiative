
import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Edit, Eye } from 'lucide-react';

interface Member {
  id: string;
  uid: string;
  name: string;
  qualification: string;
  designation: string;
  location: string;
  joiningDate: string;
  contributions: string;
  certificates: string;
  profileImage: string;
  referralCount: number;
}

const MembersList = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const { toast } = useToast();

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

  const updateMember = async (memberId: string, data: Partial<Member>) => {
    try {
      const memberRef = doc(db, 'members', memberId);
      await updateDoc(memberRef, data);
      
      toast({
        title: "Success!",
        description: "Member updated successfully",
      });
      
      fetchMembers();
      setEditingMember(null);
    } catch (error) {
      console.error('Error updating member:', error);
      toast({
        title: "Error",
        description: "Failed to update member",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading members...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <img
                src={member.profileImage}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <CardTitle className="text-lg">{member.name}</CardTitle>
              <p className="text-sm text-gray-600">UID: {member.uid}</p>
              <p className="text-sm text-gray-600">Referrals: {member.referralCount}</p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Qualification:</strong> {member.qualification}</p>
              <p><strong>Designation:</strong> {member.designation}</p>
              <p><strong>Location:</strong> {member.location}</p>
              <p><strong>Joining Date:</strong> {new Date(member.joiningDate).toLocaleDateString()}</p>
              
              <div className="flex gap-2 mt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{member.name} - Full Profile</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="text-center">
                        <img
                          src={member.profileImage}
                          alt={member.name}
                          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <p><strong>UID:</strong> {member.uid}</p>
                        <p><strong>Qualification:</strong> {member.qualification}</p>
                        <p><strong>Designation:</strong> {member.designation}</p>
                        <p><strong>Location:</strong> {member.location}</p>
                        <p><strong>Referral Count:</strong> {member.referralCount}</p>
                      </div>
                      {member.contributions && (
                        <div>
                          <strong>Contributions:</strong>
                          <p className="mt-1 text-sm text-gray-600">{member.contributions}</p>
                        </div>
                      )}
                      {member.certificates && (
                        <div>
                          <strong>Certificates:</strong>
                          <p className="mt-1 text-sm text-gray-600">{member.certificates}</p>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setEditingMember(member)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Edit {member.name}</DialogTitle>
                    </DialogHeader>
                    {editingMember && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Name</Label>
                            <Input
                              value={editingMember.name}
                              onChange={(e) => setEditingMember({...editingMember, name: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label>Qualification</Label>
                            <Input
                              value={editingMember.qualification}
                              onChange={(e) => setEditingMember({...editingMember, qualification: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label>Designation</Label>
                            <Input
                              value={editingMember.designation}
                              onChange={(e) => setEditingMember({...editingMember, designation: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label>Location</Label>
                            <Input
                              value={editingMember.location}
                              onChange={(e) => setEditingMember({...editingMember, location: e.target.value})}
                            />
                          </div>
                        </div>
                        <div>
                          <Label>Contributions</Label>
                          <Textarea
                            value={editingMember.contributions}
                            onChange={(e) => setEditingMember({...editingMember, contributions: e.target.value})}
                            rows={3}
                          />
                        </div>
                        <div>
                          <Label>Certificates</Label>
                          <Textarea
                            value={editingMember.certificates}
                            onChange={(e) => setEditingMember({...editingMember, certificates: e.target.value})}
                            rows={3}
                          />
                        </div>
                        <Button 
                          onClick={() => updateMember(editingMember.id, editingMember)}
                          className="w-full"
                        >
                          Update Member
                        </Button>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MembersList;
