import { useState } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function StableDiffusionInput({ onSubmit, loading }) {
  const [prompt, setPrompt] = useState('');
  const [quality, setQuality] = useState('Balanced');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      prompt,
      quality_preset: quality
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="block font-medium text-purple-400">
          Prompt
        </label>
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your image description..."
          className="bg-gray-900 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-purple-500"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium text-purple-400">
          Quality Preset
        </label>
        <Select value={quality} onValueChange={setQuality}>
          <SelectTrigger className="bg-gray-900   border-gray-700 text-left text-purple-400">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-gray-700">
            <SelectItem 
              value="Fast"
              className="text-gray-100 focus:bg-gray-800 focus:text-purple-400"
            >
              <div className="flex flex-col">
                <span className="font-medium">Fast</span>
                <span className="text-sm text-gray-400">Quick generation, lower quality</span>
              </div>
            </SelectItem>
            <SelectItem 
              value="Balanced"
              className="text-gray-100 focus:bg-gray-800 focus:text-purple-400"
            >
              <div className="flex flex-col">
                <span className="font-medium">Balanced</span>
                <span className="text-sm text-gray-400">Good balance of speed and quality</span>
              </div>
            </SelectItem>
            <SelectItem 
              value="Quality"
              className="text-gray-100 focus:bg-gray-800 focus:text-purple-400"
            >
              <div className="flex flex-col">
                <span className="font-medium">Quality</span>
                <span className="text-sm text-gray-400">Best quality, slower generation</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
        disabled={loading || !prompt.trim()}
      >
        Generate Image
      </Button>
    </form>
  );
} 