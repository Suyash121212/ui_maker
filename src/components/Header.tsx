import React from 'react';
import { Save, Play, Download, Share2, Settings, HelpCircle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-blue-600 font-bold text-xl mr-8">UI Designer</div>
        <nav className="hidden md:flex space-x-4">
          <button className="text-gray-600 hover:text-gray-900 px-2 py-1 text-sm">File</button>
          <button className="text-gray-600 hover:text-gray-900 px-2 py-1 text-sm">Edit</button>
          <button className="text-gray-600 hover:text-gray-900 px-2 py-1 text-sm">View</button>
          <button className="text-gray-600 hover:text-gray-900 px-2 py-1 text-sm">Help</button>
        </nav>
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm flex items-center">
          <Play size={16} className="mr-1" />
          Preview
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm flex items-center">
          <Save size={16} className="mr-1" />
          Save
        </button>
        <div className="flex space-x-1 ml-2">
          <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
            <Download size={18} />
          </button>
          <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
            <Share2 size={18} />
          </button>
          <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
            <Settings size={18} />
          </button>
          <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
            <HelpCircle size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};