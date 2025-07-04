import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc, query, where, getDocs, doc, updateDoc, increment } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { useSearchParams } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FormData {
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
  image: FileList | null;
  referralCode: string;
}

const JoinUs = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const referralCode = searchParams.get('ref') || '';
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      referralCode: referralCode
    }
  });

  const supportingAmount = watch('supportingAmount');

  // Set referral code when component mounts
  useState(() => {
    if (referralCode) {
      setValue('referralCode', referralCode);
    }
  });

  const onSubmit = async (data: FormData) => {
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

      let profileImageUrl = '';
      
      // Upload profile image if provided
      if (data.image && data.image.length > 0) {
        const imageFile = data.image[0];
        const imageRef = ref(storage, `joinedMembers/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(imageRef, imageFile);
        profileImageUrl = await getDownloadURL(snapshot.ref);
      }

      // Generate unique member ID
      const membersRef = collection(db, 'joinedMembers');
      const snapshot = await getDocs(membersRef);
      const memberCount = snapshot.size;
      const newMemberId = String(memberCount + 1).padStart(4, '0');

      // Handle referral logic
      let referredBy = null;
      if (data.referralCode) {
        const referrerQuery = query(collection(db, 'members'), where('uid', '==', data.referralCode));
        const referrerSnapshot = await getDocs(referrerQuery);
        
        if (!referrerSnapshot.empty) {
          const referrerDoc = referrerSnapshot.docs[0];
          referredBy = data.referralCode;
          
          // Increment referral count for the referrer
          await updateDoc(doc(db, 'members', referrerDoc.id), {
            referralCount: increment(1)
          });
        }
      }

      // Submit member data to joinedMembers collection
      const memberData = {
        ...data,
        memberId: newMemberId,
        referredBy: referredBy,
        referralCount: 0,
        supportingAmount: data.supportingAmount === 'custom' ? data.customAmount : data.supportingAmount,
        status: 'pending',
        profileImage: profileImageUrl,
        createdAt: new Date().toISOString(),
      };

      // Remove image from data before saving
      delete memberData.image;

      await addDoc(collection(db, 'joinedMembers'), memberData);

      toast({
        title: "Registration Successful!",
        description: `Welcome! Your application ID is ${newMemberId}. Please save this for future reference.`,
      });

    } catch (error) {
      console.error('Error registering member:', error);
      toast({
        title: "Error",
        description: "Failed to register. Please try again.",
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Become a member of Cyber Hope Help Initiative Foundation and help us create a safer digital world
            </p>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Membership Application Form</CardTitle>
              <CardDescription className="text-center">
                Please fill out all the required information to join our foundation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Referral Code */}
                {referralCode && (
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-blue-800 font-medium">
                      You were referred by member: {referralCode}
                    </p>
                  </div>
                )}

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
                      If you were referred by a member, their ID will appear here automatically
                    </p>
                  </div>
                </div>

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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select {...register('gender', { required: 'Gender is required' })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="dob">Date of Birth *</Label>
                      <Input
                        id="dob"
                        type="date"
                        {...register('dob', { required: 'Date of birth is required' })}
                      />
                      {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="mobile">Mobile Number *</Label>
                      <Input
                        id="mobile"
                        type="tel"
                        {...register('mobile', { required: 'Mobile number is required' })}
                      />
                      {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        {...register('whatsapp', { required: 'WhatsApp number is required' })}
                      />
                      {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                {/* Family Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Family Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentName">Father/Mother/Spouse Name *</Label>
                      <Input
                        id="parentName"
                        {...register('parentName', { required: 'Parent name is required' })}
                      />
                      {errors.parentName && <p className="text-red-500 text-sm mt-1">{errors.parentName.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="parentMobile">Father/Mother/Spouse Mobile *</Label>
                      <Input
                        id="parentMobile"
                        type="tel"
                        {...register('parentMobile', { required: 'Parent mobile is required' })}
                      />
                      {errors.parentMobile && <p className="text-red-500 text-sm mt-1">{errors.parentMobile.message}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="maritalStatus">Marital Status *</Label>
                    <Select {...register('maritalStatus', { required: 'Marital status is required' })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select marital status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                        <SelectItem value="widowed">Widowed</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.maritalStatus && <p className="text-red-500 text-sm mt-1">{errors.maritalStatus.message}</p>}
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Address Information</h3>
                  
                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      {...register('address', { required: 'Address is required' })}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        {...register('country', { required: 'Country is required' })}
                      />
                      {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        {...register('state', { required: 'State is required' })}
                      />
                      {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="district">District *</Label>
                      <Input
                        id="district"
                        {...register('district', { required: 'District is required' })}
                      />
                      {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        {...register('pincode', { required: 'Pincode is required' })}
                      />
                      {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Committee Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Committee Preferences</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="committee">Committee *</Label>
                      <Select {...register('committee', { required: 'Committee is required' })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select committee" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="legal">Legal Aid Committee</SelectItem>
                          <SelectItem value="awareness">Awareness Committee</SelectItem>
                          <SelectItem value="research">Research Committee</SelectItem>
                          <SelectItem value="community">Community Outreach</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.committee && <p className="text-red-500 text-sm mt-1">{errors.committee.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="subCommittee">Sub Committee</Label>
                      <Select {...register('subCommittee')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select sub committee" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cybercrime">Cybercrime Support</SelectItem>
                          <SelectItem value="education">Education & Training</SelectItem>
                          <SelectItem value="media">Media & Communication</SelectItem>
                          <SelectItem value="technology">Technology Development</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Support Amount */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Supporting Amount</h3>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {supportingAmounts.map((amount) => (
                        <Button
                          key={amount.value}
                          type="button"
                          variant={supportingAmount === amount.value ? "default" : "outline"}
                          onClick={() => setValue('supportingAmount', amount.value)}
                          className="text-sm"
                        >
                          {amount.label}
                        </Button>
                      ))}
                    </div>
                    
                    {supportingAmount === 'custom' && (
                      <div>
                        <Label htmlFor="customAmount">Custom Amount (₹)</Label>
                        <Input
                          id="customAmount"
                          type="number"
                          placeholder="Enter amount"
                          {...register('customAmount', {
                            required: 'Custom amount is required when "Custom Amount" is selected',
                          })}
                        />
                        {errors.customAmount && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.customAmount.message}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Account Security */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Account Security</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        {...register('confirmPassword', {
                          required: 'Confirm password is required',
                          validate: (value) => value === watch('password') || 'Passwords do not match',
                        })}
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Image Upload */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Profile Image</h3>
                  
                  <div>
                    <Label htmlFor="image">Upload Profile Image *</Label>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      {...register('image', { required: 'Profile image is required' })}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
                  </div>
                </div>

                <div className="text-center pt-6">
                  <Button type="submit" size="lg" className="px-12" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUs;
