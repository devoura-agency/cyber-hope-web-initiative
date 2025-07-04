
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc, getDocs, query, where, doc, updateDoc, increment } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface MemberFormData {
  uid: string;
  name: string;
  qualification: string;
  designation: string;
  location: string;
  reference: string;
  joiningDate: string;
  contributions: string;
  certificates: string;
  profileImage: FileList | null;
  referralCode: string;
}

const MemberForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<MemberFormData>();

  const onSubmit = async (data: MemberFormData) => {
    try {
      setLoading(true);
      
      let profileImageUrl = '';
      
      // Upload profile image if provided
      if (data.profileImage && data.profileImage.length > 0) {
        const imageFile = data.profileImage[0];
        const imageRef = ref(storage, `members/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(imageRef, imageFile);
        profileImageUrl = await getDownloadURL(snapshot.ref);
      }

      // Generate unique member ID
      const membersRef = collection(db, 'members');
      const snapshot = await getDocs(membersRef);
      const memberCount = snapshot.size;
      const newMemberId = String(memberCount + 1).padStart(4, '0');

      // Handle referral logic
      let referredBy = null;
      if (data.referralCode) {
        const referrerQuery = query(membersRef, where('uid', '==', data.referralCode));
        const referrerSnapshot = await getDocs(referrerQuery);
        
        if (!referrerSnapshot.empty) {
          const referrerDoc = referrerSnapshot.docs[0];
          referredBy = data.referralCode;
          
          // Increment referral count for the referrer
          await updateDoc(doc(db, 'members', referrerDoc.id), {
            referralCount: increment(1)
          });
        } else {
          toast({
            title: "Warning",
            description: "Referral code not found, member will be added without referral",
            variant: "destructive"
          });
        }
      }

      // Submit member data
      await addDoc(collection(db, 'members'), {
        uid: data.uid,
        name: data.name,
        qualification: data.qualification,
        designation: data.designation,
        location: data.location,
        reference: data.reference,
        joiningDate: data.joiningDate,
        contributions: data.contributions,
        certificates: data.certificates,
        profileImage: profileImageUrl,
        referredBy: referredBy,
        referralCount: 0,
        status: 'active',
        createdAt: new Date().toISOString(),
      });

      toast({
        title: "Success",
        description: `Member added successfully! Member ID: ${newMemberId}`,
      });

      reset();

    } catch (error) {
      console.error('Error adding member:', error);
      toast({
        title: "Error",
        description: "Failed to add member. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Basic Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Basic Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="uid">Member ID (UID) *</Label>
            <Input
              id="uid"
              {...register('uid', { required: 'Member ID is required' })}
              placeholder="e.g., 0001"
            />
            {errors.uid && <p className="text-red-500 text-sm mt-1">{errors.uid.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

      {/* Additional Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Additional Information</h3>
        
        <div>
          <Label htmlFor="contributions">Contributions & Activities</Label>
          <Textarea
            id="contributions"
            {...register('contributions')}
            placeholder="List activities they have participated in and their contributions..."
            rows={4}
          />
        </div>

        <div>
          <Label htmlFor="certificates">Certificates</Label>
          <Textarea
            id="certificates"
            {...register('certificates')}
            placeholder="List any certificates or achievements..."
            rows={3}
          />
        </div>
      </div>

      {/* Referral Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Referral Information</h3>
        
        <div>
          <Label htmlFor="referralCode">Referral Code (Optional)</Label>
          <Input
            id="referralCode"
            placeholder="Enter referral member ID (e.g., 0010)"
            {...register('referralCode')}
          />
          <p className="text-sm text-gray-500 mt-1">
            If this member was referred by another member, enter their member ID here
          </p>
        </div>
      </div>

      {/* Profile Image */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Profile Image</h3>
        
        <div>
          <Label htmlFor="profileImage">Upload Profile Image *</Label>
          <Input
            id="profileImage"
            type="file"
            accept="image/*"
            {...register('profileImage', { required: 'Profile image is required' })}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {errors.profileImage && <p className="text-red-500 text-sm mt-1">{errors.profileImage.message}</p>}
        </div>
      </div>

      <div className="text-center pt-6">
        <Button type="submit" size="lg" className="px-12" disabled={loading}>
          {loading ? 'Adding Member...' : 'Add Member'}
        </Button>
      </div>
    </form>
  );
};

export default MemberForm;
