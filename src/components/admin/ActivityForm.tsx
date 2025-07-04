
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Calendar, MapPin, Users, Tag, FileText, Image } from 'lucide-react';

const ActivityForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    date: '',
    location: '',
    participants: '',
    tag: ''
  });
  const [images, setImages] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrls: string[] = [];
      
      // Upload images if provided
      if (images && images.length > 0) {
        const uploadPromises = Array.from(images).map(async (file) => {
          const imageRef = ref(storage, `activities/${Date.now()}_${file.name}`);
          const snapshot = await uploadBytes(imageRef, file);
          return getDownloadURL(snapshot.ref);
        });
        
        imageUrls = await Promise.all(uploadPromises);
      }
      
      await addDoc(collection(db, 'activities'), {
        ...formData,
        participants: parseInt(formData.participants),
        images: imageUrls,
        createdAt: new Date()
      });

      toast.success('Activity added successfully!');
      setFormData({
        title: '',
        description: '',
        content: '',
        date: '',
        location: '',
        participants: '',
        tag: ''
      });
      setImages(null);
      
      // Reset file input
      const fileInput = document.getElementById('images') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error('Error adding activity:', error);
      toast.error('Failed to add activity');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Activity Title
          </Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            placeholder="Enter activity title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tag" className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            Tag
          </Label>
          <Input
            id="tag"
            value={formData.tag}
            onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
            required
            placeholder="e.g., Workshop, Awareness, Training"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="date" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Date
          </Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Location
          </Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
            placeholder="Enter location"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="participants" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Participants Count
          </Label>
          <Input
            id="participants"
            type="number"
            value={formData.participants}
            onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
            required
            placeholder="Number of participants"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="images" className="flex items-center gap-2">
            <Image className="h-4 w-4" />
            Upload Images
          </Label>
          <Input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setImages(e.target.files)}
            required
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <p className="text-xs text-gray-500">
            Select multiple images for the activity. Supported formats: JPG, PNG, GIF
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Short Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
          placeholder="Brief description of the activity"
          rows={2}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Detailed Content</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          required
          placeholder="Detailed description of the activity and its impact"
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Adding Activity...' : 'Add Activity'}
      </Button>
    </form>
  );
};

export default ActivityForm;
