
import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Check, X, Edit, Eye, Trash2 } from 'lucide-react';

interface JoinedMember {
  id: string;
  title: string;
  name: string;
  email: string;
  mobile: string;
  gender: string;
  dob: string;
  whatsapp?: string;
  parentName?: string;
  parentMobile?: string;
  maritalStatus?: string;
  address?: string;
  country?: string;
  state?: string;
  district?: string;
  pincode?: string;
  supportingAmount: string;
  customAmount?: string;
  imageUrl?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

const JoinedMembersList = () => {
  const [joinedMembers, setJoinedMembers] = useState<JoinedMember[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchJoinedMembers();
  }, []);

  const fetchJoinedMembers = async () => {
    try {
      setLoading(true);
      const joinedMembersRef = collection(db, 'joinedMembers');
      const querySnapshot = await getDocs(joinedMembersRef);
      const membersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as JoinedMember[];
      
      setJoinedMembers(membersData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    } catch (error) {
      console.error('Error fetching joined members:', error);
      toast({
        title: "Error",
        description: "Failed to fetch joined members",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleApproveAndAddMember = async (memberData: JoinedMember) => {
    try {
      // Generate unique member ID
      const membersRef = collection(db, 'members');
      const snapshot = await getDocs(membersRef);
      const memberCount = snapshot.size;
      const newMemberId = String(memberCount + 1).padStart(4, '0');

      // Add to members collection
      await addDoc(collection(db, 'members'), {
        ...memberData,
        memberId: newMemberId,
        referralCount: 0,
        status: 'active',
        password: `temp_${newMemberId}`, // Temporary password
        createdAt: new Date().toISOString(),
      });

      // Update status in joinedMembers
      await updateDoc(doc(db, 'joinedMembers', memberData.id), {
        status: 'approved'
      });

      // Update local state
      setJoinedMembers(prev => 
        prev.map(member => 
          member.id === memberData.id 
            ? { ...member, status: 'approved' as const }
            : member
        )
      );

      toast({
        title: "Success",
        description: `Member approved and added successfully! Member ID: ${newMemberId}`,
      });
    } catch (error) {
      console.error('Error approving member:', error);
      toast({
        title: "Error",
        description: "Failed to approve member",
        variant: "destructive"
      });
    }
  };

  const handleRejectMember = async (memberId: string) => {
    try {
      await updateDoc(doc(db, 'joinedMembers', memberId), {
        status: 'rejected'
      });

      setJoinedMembers(prev => 
        prev.map(member => 
          member.id === memberId 
            ? { ...member, status: 'rejected' as const }
            : member
        )
      );

      toast({
        title: "Success",
        description: "Member rejected successfully",
      });
    } catch (error) {
      console.error('Error rejecting member:', error);
      toast({
        title: "Error",
        description: "Failed to reject member",
        variant: "destructive"
      });
    }
  };

  const handleDeleteMember = async (memberId: string) => {
    if (window.confirm('Are you sure you want to delete this joined member?')) {
      try {
        await deleteDoc(doc(db, 'joinedMembers', memberId));
        setJoinedMembers(prev => prev.filter(member => member.id !== memberId));
        toast({
          title: "Success",
          description: "Joined member deleted successfully",
        });
      } catch (error) {
        console.error('Error deleting member:', error);
        toast({
          title: "Error",
          description: "Failed to delete member",
          variant: "destructive"
        });
      }
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-500">Approved</Badge>;
      case 'rejected':
        return <Badge className="bg-red-500">Rejected</Badge>;
      default:
        return <Badge className="bg-yellow-500">Pending</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading joined members...</p>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Joined Members Management ({joinedMembers.length})</CardTitle>
        <CardDescription>Review and manage members who have joined through the website</CardDescription>
      </CardHeader>
      <CardContent>
        {joinedMembers.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No joined members found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Mobile</TableHead>
                  <TableHead>Supporting Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {joinedMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{member.title} {member.name}</p>
                        <p className="text-gray-500 text-sm">{member.gender}</p>
                      </div>
                    </TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>{member.mobile}</TableCell>
                    <TableCell>
                      {member.supportingAmount === 'custom' && member.customAmount 
                        ? `₹${member.customAmount}` 
                        : `₹${member.supportingAmount}`}
                    </TableCell>
                    <TableCell>{getStatusBadge(member.status)}</TableCell>
                    <TableCell>{new Date(member.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {member.status === 'pending' && (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleApproveAndAddMember(member)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <Check className="h-3 w-3 mr-1" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleRejectMember(member.id)}
                            >
                              <X className="h-3 w-3 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteMember(member.id)}
                        >
                          <Trash2 className="h-3 w-3 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default JoinedMembersList;
