
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Upload } from 'lucide-react';

interface ActivityFormData {
  title: string;
  content: string;
  date: string;
  location: string;
  participants: number;
  tag: string;
  description: string;
  images: FileList;
}

const ActivityForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ActivityFormData>();

  const uploadImages = async (images: FileList) => {
    const imageUrls = [];
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const imageRef = ref(storage, `activities/${Date.now()}_${image.name}`);
      const snapshot = await uploadBytes(imageRef, image);
      const downloadURL = await getDownloadURL(snapshot.ref);
      imageUrls.push(downloadURL);
    }
    return imageUrls;
  };

  const onSubmit = async (data: ActivityFormData) => {
    try {
      setLoading(true);
      
      const imageUrls = await uploadImages(data.images);
      
      await addDoc(collection(db, 'activities'), {
        title: data.title,
        content: data.content,
        date: data.date,
        location: data.location,
        participants: Number(data.participants),
        tag: data.tag,
        description: data.description,
        images: imageUrls,
        createdAt: new Date().toISOString(),
      });

      toast({
        title: "Success!",
        description: "Activity added successfully",
      });
      
      reset();
    } catch (error) {
      console.error('Error adding activity:', error);
      toast({
        title: "Error",
        description: "Failed to add activity",
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
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <Label htmlFor="tag">Tag *</Label>
          <Input
            id="tag"
            {...register('tag', { required: 'Tag is required' })}
            placeholder="e.g., Education, Workshop, Legal Aid"
          />
          {errors.tag && <p className="text-red-500 text-sm mt-1">{errors.tag.message}</p>}
        </div>

        <div>
          <Label htmlFor="date">Date *</Label>
          <Input
            id="date"
            type="date"
            {...register('date', { required: 'Date is required' })}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
        </div>

        <div>
          <Label htmlFor="participants">Participants *</Label>
          <Input
            id="participants"
            type="number"
            {...register('participants', { required: 'Participants count is required' })}
          />
          {errors.participants && <p className="text-red-500 text-sm mt-1">{errors.participants.message}</p>}
        </div>
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
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          rows={3}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>

      <div>
        <Label htmlFor="content">Content *</Label>
        <Textarea
          id="content"
          {...register('content', { required: 'Content is required' })}
          rows={5}
        />
        {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
      </div>

      <div>
        <Label htmlFor="images">Images *</Label>
        <Input
          id="images"
          type="file"
          multiple
          accept="image/*"
          {...register('images', { required: 'At least one image is required' })}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {errors.images && <p className="text-red-500 text-sm mt-1">{errors.images.message}</p>}
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? (
          <>
            <Upload className="mr-2 h-4 w-4 animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            Add Activity
          </>
        )}
      </Button>
    </form>
  );
};

export default ActivityForm;
