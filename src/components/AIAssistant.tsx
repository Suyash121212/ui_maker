import React, { useState } from 'react';
import { Zap, Wand2, RefreshCw, ThumbsUp, ThumbsDown } from 'lucide-react';

export const AIAssistant: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'suggestions' | 'generator'>('suggestions');
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
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
      </div>
      
      {activeTab === 'suggestions' && (
        <div className="space-y-3">
          <div className="bg-blue-50 border border-blue-100 rounded-md p-3">
            <div className="flex items-start">
              <Zap size={18} className="text-blue-500 mr-2 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-blue-700 mb-1">Layout Improvement</h4>
                <p className="text-xs text-blue-600">Consider adding more spacing between your card components for better readability.</p>
                <div className="flex justify-end mt-2">
                  <button className="text-xs text-blue-700 hover:text-blue-800 mr-3">Apply</button>
                  <button className="text-xs text-gray-500 hover:text-gray-700">Dismiss</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-100 rounded-md p-3">
            <div className="flex items-start">
              <Zap size={18} className="text-green-500 mr-2 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-green-700 mb-1">Color Scheme</h4>
                <p className="text-xs text-green-600">Your current color scheme has low contrast. Try these alternative colors for better accessibility.</p>
                <div className="flex mt-2 space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                  <div className="w-6 h-6 rounded-full bg-indigo-500"></div>
                  <div className="w-6 h-6 rounded-full bg-purple-600"></div>
                </div>
                <div className="flex justify-end mt-2">
                  <button className="text-xs text-green-700 hover:text-green-800 mr-3">Apply</button>
                  <button className="text-xs text-gray-500 hover:text-gray-700">Dismiss</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-100 rounded-md p-3">
            <div className="flex items-start">
              <Zap size={18} className="text-purple-500 mr-2 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-purple-700 mb-1">Responsive Design</h4>
                <p className="text-xs text-purple-600">Your design may not look good on mobile. Here are some responsive adjustments.</p>
                <div className="flex justify-end mt-2">
                  <button className="text-xs text-purple-700 hover:text-purple-800 mr-3">Apply</button>
                  <button className="text-xs text-gray-500 hover:text-gray-700">Dismiss</button>
                </div>
              </div>
            </div>
          </div>
          
          <button className="w-full flex items-center justify-center text-sm text-gray-600 hover:text-gray-800 py-2 border border-gray-200 rounded-md hover:bg-gray-50">
            <RefreshCw size={14} className="mr-2" />
            Refresh Suggestions
          </button>
        </div>
      )}
      
      {activeTab === 'generator' && (
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Describe what you want to create</label>
            <textarea 
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm h-24"
              placeholder="E.g., Create a responsive navigation bar with a logo, links, and a search box"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
          </div>
          
          <button 
            className={`w-full flex items-center justify-center text-sm text-white py-2 rounded-md ${
              isGenerating || !prompt.trim() 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            onClick={handleGenerate}
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
          
          <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Previous Generations</h4>
            
            <div className="space-y-2">
              <div className="bg-white border border-gray-200 rounded p-2">
                <p className="text-xs text-gray-600 mb-1">A responsive hero section with a heading, subheading, and CTA button</p>
                <div className="flex justify-between items-center">
                  <button className="text-xs text-blue-600 hover:text-blue-700">Use Again</button>
                  <div className="flex space-x-1">
                    <button className="text-gray-400 hover:text-green-600">
                      <ThumbsUp size={12} />
                    </button>
                    <button className="text-gray-400 hover:text-red-600">
                      <ThumbsDown size={12} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded p-2">
                <p className="text-xs text-gray-600 mb-1">A contact form with name, email, message fields and submit button</p>
                <div className="flex justify-between items-center">
                  <button className="text-xs text-blue-600 hover:text-blue-700">Use Again</button>
                  <div className="flex space-x-1">
                    <button className="text-gray-400 hover:text-green-600">
                      <ThumbsUp size={12} />
                    </button>
                    <button className="text-gray-400 hover:text-red-600">
                      <ThumbsDown size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};