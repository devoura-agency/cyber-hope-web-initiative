import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc, getDocs, query, where, doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface MemberFormData {
  title: string;
  name: string;
  gender: string;
  mobile: string;
  whatsapp: string;
  dob: string;
  email: string;
  parentName: string;
  parentMobile: string;
  maritalStatus: string;
  address: string;
  country: string;
  state: string;
  district: string;
  committee: string;
  subCommittee: string;
  supportingAmount: string;
  customAmount: string;
  pincode: string;
  password: string;
  confirmPassword: string;
  imageUrl: string;
  referralCode: string;
}

const MemberForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<MemberFormData>();

  const supportingAmount = watch('supportingAmount');

  const onSubmit = async (data: MemberFormData) => {
    try {
      setLoading(true);
      
      if (data.password !== data.confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords do not match",
          variant: "destructive"
        });
        return;
      }

      // Generate unique member ID
      const membersRef = collection(db, 'members');
      const snapshot = await getDocs(membersRef);
      const memberCount = snapshot.size;
      const newMemberId = String(memberCount + 1).padStart(4, '0');

      // Handle referral logic
      let referredBy = null;
      if (data.referralCode) {
        const referrerQuery = query(membersRef, where('memberId', '==', data.referralCode));
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
        ...data,
        memberId: newMemberId,
        referredBy: referredBy,
        referralCount: 0,
        supportingAmount: data.supportingAmount === 'custom' ? data.customAmount : data.supportingAmount,
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

  const supportingAmounts = [
    { value: '500', label: '₹500' },
    { value: '1000', label: '₹1,000' },
    { value: '2000', label: '₹2,000' },
    { value: '5000', label: '₹5,000' },
    { value: 'custom', label: 'Custom Amount' }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Select {...register('title', { required: 'Title is required' })}>
              <SelectTrigger>
                <SelectValue placeholder="Select title" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mr">Mr.</SelectItem>
                <SelectItem value="mrs">Mrs.</SelectItem>
                <SelectItem value="ms">Ms.</SelectItem>
                <SelectItem value="dr">Dr.</SelectItem>
              </SelectContent>
            </Select>
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>
          
          <div className="md:col-span-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="gender">Gender *</Label>
          <Input
            id="gender"
            type="text"
            {...register('gender', { required: 'Gender is required' })}
          />
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
        </div>

        <div>
          <Label htmlFor="mobile">Mobile *</Label>
          <Input
            id="mobile"
            type="tel"
            {...register('mobile', { required: 'Mobile is required' })}
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
        </div>

        <div>
          <Label htmlFor="whatsapp">WhatsApp</Label>
          <Input
            id="whatsapp"
            type="tel"
            {...register('whatsapp')}
          />
        </div>

        <div>
          <Label htmlFor="dob">Date of Birth *</Label>
          <Input
            id="dob"
            type="date"
            {...register('dob', { required: 'Date of Birth is required' })}
          />
          {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
          />
        </div>

        <div>
          <Label htmlFor="parentName">Parent's Name</Label>
          <Input
            id="parentName"
            type="text"
            {...register('parentName')}
          />
        </div>

        <div>
          <Label htmlFor="parentMobile">Parent's Mobile</Label>
          <Input
            id="parentMobile"
            type="tel"
            {...register('parentMobile')}
          />
        </div>

        <div>
          <Label htmlFor="maritalStatus">Marital Status</Label>
          <Input
            id="maritalStatus"
            type="text"
            {...register('maritalStatus')}
          />
        </div>

        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            type="text"
            {...register('address')}
          />
        </div>

        <div>
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            type="text"
            {...register('country')}
          />
        </div>

        <div>
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            type="text"
            {...register('state')}
          />
        </div>

        <div>
          <Label htmlFor="district">District</Label>
          <Input
            id="district"
            type="text"
            {...register('district')}
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

      <div>
        <Label htmlFor="committee">Committee</Label>
        <Input
          id="committee"
          type="text"
          {...register('committee')}
        />
      </div>

      <div>
        <Label htmlFor="subCommittee">Sub-Committee</Label>
        <Input
          id="subCommittee"
          type="text"
          {...register('subCommittee')}
        />
      </div>

      <div>
        <Label htmlFor="supportingAmount">Supporting Amount *</Label>
        <Select {...register('supportingAmount', { required: 'Supporting amount is required' })}>
          <SelectTrigger>
            <SelectValue placeholder="Select supporting amount" />
          </SelectTrigger>
          <SelectContent>
            {supportingAmounts.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.supportingAmount && <p className="text-red-500 text-sm mt-1">{errors.supportingAmount.message}</p>}
      </div>

      <div>
        <Label htmlFor="customAmount">Custom Amount</Label>
        <Input
          id="customAmount"
          type="text"
          {...register('customAmount')}
        />
      </div>

      <div>
        <Label htmlFor="pincode">Pincode</Label>
        <Input
          id="pincode"
          type="text"
          {...register('pincode')}
        />
      </div>

      <div>
        <Label htmlFor="password">Password *</Label>
        <Input
          id="password"
          type="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirm Password *</Label>
        <Input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword', { required: 'Confirm password is required' })}
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
      </div>

      <div>
        <Label htmlFor="imageUrl">Profile Image URL *</Label>
        <Input
          id="imageUrl"
          type="url"
          {...register('imageUrl', { required: 'Profile image URL is required' })}
          placeholder="https://example.com/image.jpg"
        />
        {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl.message}</p>}
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
