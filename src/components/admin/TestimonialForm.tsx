
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Youtube } from 'lucide-react';

interface TestimonialFormData {
  personName: string;
  designation: string;
  youtubeUrl: string;
  message: string;
}

const TestimonialForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestimonialFormData>();

  const validateYouTubeUrl = (url: string) => {
    const youtubeRegex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return youtubeRegex.test(url) || 'Please enter a valid YouTube URL';
  };

  const onSubmit = async (data: TestimonialFormData) => {
    try {
      setLoading(true);
      
      await addDoc(collection(db, 'testimonials'), {
        personName: data.personName,
        designation: data.designation,
        youtubeUrl: data.youtubeUrl,
        message: data.message,
        createdAt: new Date().toISOString(),
        isActive: true,
      });

      toast({
        title: "Success!",
        description: "Testimonial added successfully",
      });
      
      reset();
    } catch (error) {
      console.error('Error adding testimonial:', error);
      toast({
        title: "Error",
        description: "Failed to add testimonial",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="personName">Person's Name *</Label>
          <Input
            id="personName"
            {...register('personName', { required: 'Name is required' })}
            placeholder="John Doe"
          />
          {errors.personName && <p className="text-red-500 text-sm mt-1">{errors.personName.message}</p>}
        </div>

        <div>
          <Label htmlFor="designation">Designation *</Label>
          <Input
            id="designation"
            {...register('designation', { required: 'Designation is required' })}
            placeholder="CEO, Company Name"
          />
          {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="youtubeUrl">YouTube Video URL *</Label>
        <Input
          id="youtubeUrl"
          type="url"
          {...register('youtubeUrl', { 
            required: 'YouTube URL is required',
            validate: validateYouTubeUrl
          })}
          placeholder="https://www.youtube.com/watch?v=..."
        />
        {errors.youtubeUrl && <p className="text-red-500 text-sm mt-1">{errors.youtubeUrl.message}</p>}
      </div>

      <div>
        <Label htmlFor="message">Testimonial Message</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Brief description of the testimonial..."
          rows={3}
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? (
          <>
            <Youtube className="mr-2 h-4 w-4 animate-spin" />
            Adding Testimonial...
          </>
        ) : (
          <>
            <Youtube className="mr-2 h-4 w-4" />
            Add Testimonial
          </>
        )}
      </Button>
    </form>
  );
};

export default TestimonialForm;
