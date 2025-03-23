import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function XrayInput({ onSubmit, loading }) {
  const [imageUrl, setImageUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      image_url: imageUrl
    });
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);
    if (url.match(/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i)) {
      setPreviewUrl(url);
    } else {
      setPreviewUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="image-url" className="text-purple-400">X-ray Image URL</Label>
        <Input
          id="image-url"
          type="url"
          value={imageUrl}
          onChange={handleUrlChange}
          placeholder="https://example.com/xray.jpg"
          className="bg-gray-900 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-purple-500"
          required
        />
        <p className="text-sm text-gray-400">
          Enter the URL of an X-ray image (JPG, PNG, or WEBP format)
        </p>
      </div>

      {previewUrl && (
        <div className="space-y-2">
          <Label className="text-purple-400">Preview</Label>
          <div className="border border-gray-700 rounded-lg p-2 bg-gray-900">
            <img
              src={previewUrl}
              alt="X-ray preview"
              className="max-h-64 mx-auto object-contain"
            />
          </div>
        </div>
      )}

      <Button 
        type="submit" 
        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
        disabled={loading || !imageUrl.trim()}
      >
        Analyze X-ray
      </Button>
    </form>
  );
} 