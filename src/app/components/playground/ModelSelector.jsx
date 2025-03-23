import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function ModelSelector({ models, selectedModel, onSelect }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold mb-2 text-purple-400">Select Model</h2>
        <Select
          value={selectedModel?.id}
          onValueChange={(value) => onSelect(models.find(m => m.id === value))}
        >
          <SelectTrigger className="w-full bg-gray-900 text-gray-100 border-gray-700">
            <SelectValue>
              {selectedModel ? (
                <div className="flex flex-col text-purple-400 text-left">
                  <span className="font-medium">{selectedModel.name}</span>
                  
                </div>
              ) : (
                <span>Choose a model</span>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-gray-700">
            {models.map((model) => (
              <SelectItem 
                key={model.id} 
                value={model.id}
                className="text-gray-100 focus:bg-gray-800 focus:text-purple-400"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{model.name}</span>
                  <span className="text-sm text-gray-400">{model.description}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedModel && (
        <div className="p-4 bg-gray-900/80 rounded-lg border border-gray-700">
          <h3 className="font-medium mb-2 text-purple-400">{selectedModel.name}</h3>
          <p className="text-sm text-gray-300">{selectedModel.description}</p>
        </div>
      )}
    </div>
  );
} 