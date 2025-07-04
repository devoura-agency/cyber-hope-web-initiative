
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { FileText, Calendar, Upload } from 'lucide-react';

const WeeklyNewsForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    publishDate: ''
  });
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!pdfFile) {
      toast.error('Please select a PDF file');
      return;
    }

    setLoading(true);

    try {
      // Upload PDF file
      const pdfRef = ref(storage, `weekly-news/${Date.now()}_${pdfFile.name}`);
      const snapshot = await uploadBytes(pdfRef, pdfFile);
      const pdfUrl = await getDownloadURL(snapshot.ref);
      
      // Save to Firestore
      await addDoc(collection(db, 'weeklyNews'), {
        ...formData,
        pdfUrl,
        createdAt: new Date()
      });

      toast.success('Weekly news uploaded successfully!');
      setFormData({
        title: '',
        description: '',
        publishDate: ''
      });
      setPdfFile(null);
      
      // Reset file input
      const fileInput = document.getElementById('pdfFile') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error('Error uploading weekly news:', error);
      toast.error('Failed to upload weekly news');
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
            Edition Title
          </Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            placeholder="e.g., Cyber Security Weekly - Issue #1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="publishDate" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Publish Date
          </Label>
          <Input
            id="publishDate"
            type="date"
            value={formData.publishDate}
            onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
          placeholder="Brief description of this week's edition content"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="pdfFile" className="flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Upload PDF File
        </Label>
        <Input
          id="pdfFile"
          type="file"
          accept=".pdf"
          onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
          required
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <p className="text-xs text-gray-500">
          Upload the weekly edition PDF file. Maximum size: 10MB
        </p>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Uploading Weekly News...' : 'Upload Weekly News'}
      </Button>
    </form>
  );
};

export default WeeklyNewsForm;
