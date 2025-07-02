
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Upload } from 'lucide-react';

interface MemberFormData {
  name: string;
  qualification: string;
  designation: string;
  location: string;
  reference: string;
  joiningDate: string;
  contributions: string;
  certificates: string;
  profileImageUrl: string;
}

const MemberForm = () => {
  const [loading, setLoading] = useState(false);
  const [nextUID, setNextUID] = useState('0001');
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<MemberFormData>();

  useEffect(() => {
    fetchNextUID();
  }, []);

  const fetchNextUID = async () => {
    try {
      const membersRef = collection(db, 'members');
      const q = query(membersRef, orderBy('uid', 'desc'), limit(1));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const lastMember = querySnapshot.docs[0].data();
        const lastUID = parseInt(lastMember.uid);
        const newUID = (lastUID + 1).toString().padStart(4, '0');
        setNextUID(newUID);
      }
    } catch (error) {
      console.error('Error fetching next UID:', error);
    }
  };

  const onSubmit = async (data: MemberFormData) => {
    try {
      setLoading(true);
      
      await addDoc(collection(db, 'members'), {
        uid: nextUID,
        name: data.name,
        qualification: data.qualification,
        designation: data.designation,
        location: data.location,
        reference: data.reference,
        joiningDate: data.joiningDate,
        contributions: data.contributions,
        certificates: data.certificates,
        profileImage: data.profileImageUrl,
        referralCount: 0,
        createdAt: new Date().toISOString(),
      });

      toast({
        title: "Success!",
        description: `Member added successfully with UID: ${nextUID}`,
      });
      
      reset();
      fetchNextUID();
    } catch (error) {
      console.error('Error adding member:', error);
      toast({
        title: "Error",
        description: "Failed to add member",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-blue-800 font-medium">Next Member UID: {nextUID}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="qualification">Qualification *</Label>
            <Input
              id="qualification"
              {...register('qualification', { required: 'Qualification is required' })}
            />
            {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification.message}</p>}
          </div>

          <div>
            <Label htmlFor="designation">Designation *</Label>
            <Input
              id="designation"
              {...register('designation', { required: 'Designation is required' })}
            />
            {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation.message}</p>}
          </div>

          <div>
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              {...register('location', { required: 'Location is required' })}
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
          </div>

          <div>
            <Label htmlFor="reference">Reference</Label>
            <Input
              id="reference"
              {...register('reference')}
            />
          </div>

          <div>
            <Label htmlFor="joiningDate">Joining Date *</Label>
            <Input
              id="joiningDate"
              type="date"
              {...register('joiningDate', { required: 'Joining date is required' })}
            />
            {errors.joiningDate && <p className="text-red-500 text-sm mt-1">{errors.joiningDate.message}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="contributions">Contributions</Label>
          <Textarea
            id="contributions"
            {...register('contributions')}
            placeholder="Activities participated in, achievements, etc."
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="certificates">Certificates</Label>
          <Textarea
            id="certificates"
            {...register('certificates')}
            placeholder="List of certificates earned"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="profileImageUrl">Profile Image URL *</Label>
          <Input
            id="profileImageUrl"
            type="url"
            {...register('profileImageUrl', { required: 'Profile image URL is required' })}
            placeholder="https://example.com/image.jpg"
          />
          {errors.profileImageUrl && <p className="text-red-500 text-sm mt-1">{errors.profileImageUrl.message}</p>}
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? (
            <>
              <Upload className="mr-2 h-4 w-4 animate-spin" />
              Adding Member...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Add Member
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default MemberForm;
