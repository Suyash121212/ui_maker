import React, { useState } from 'react';
import { useComponentStore } from '../store/componentStore';
import { Wand2, RefreshCw, XCircle, Lightbulb } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

export const AIAssistant: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'suggestions' | 'generator' | 'edit-component'>('suggestions');
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const [suggestions] = useState<string[]>([
    "How to improve UI design?", 
    "Best practices for API optimization", 
    "How to write efficient algorithms?"
  ]);

  const { selectedComponent } = useComponentStore();

  const handleGenerate = async (inputPrompt: string) => {
    if (!inputPrompt.trim()) return;
    if (!apiKey) {
      setError("AI API Key is missing. Please configure it in your environment variables.");
      return;
    }
    
    setIsGenerating(true);
    setError(null);
    setGeneratedText('');

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
      const result = await model.generateContent(inputPrompt);
      const response = result.response;
      const text = await response.text();
      setGeneratedText(text);
    } catch (err) {
      console.error('Error generating response:', err);
      setError('Failed to generate a response. Please try again.');
    }

    setIsGenerating(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
    setActiveTab('generator');
    handleGenerate(suggestion);
  };

  return (
    <div className="space-y-4">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-2 text-sm font-medium ${activeTab === 'suggestions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('suggestions')}
        >
          Suggestions
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium ${activeTab === 'generator' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('generator')}
        >
          AI Generator
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium ${activeTab === 'edit-component' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('edit-component')}
          disabled={!selectedComponent}
        >
          Edit Component
        </button>
      </div>

      {/* Suggestions Tab */}
      {activeTab === 'suggestions' && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-700">Try these suggestions:</h4>
          <ul className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-gray-800" onClick={() => handleSuggestionClick(suggestion)}>
                <Lightbulb size={14} className="mr-2 text-yellow-500" /> {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* AI Generator Tab */}
      {activeTab === 'generator' && (
        <div className="space-y-3">
          <textarea
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe what you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>

          <button
            className={`w-full flex items-center justify-center text-sm text-white py-2 rounded-md transition-all ${
              isGenerating || !prompt.trim()
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            onClick={() => handleGenerate(prompt)}
            disabled={isGenerating || !prompt.trim()}
          >
            {isGenerating ? (
              <>
                <RefreshCw size={14} className="mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 size={14} className="mr-2" />
                Generate
              </>
            )}
          </button>

          {/* Error Message */}
          {error && (
            <div className="flex items-center bg-red-50 border border-red-300 text-red-700 p-3 rounded-md">
              <XCircle size={18} className="mr-2" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {/* Generated Response */}
          {generatedText && (
            <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Generated Output:</h4>
              <p className="text-xs text-gray-600">{generatedText}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};