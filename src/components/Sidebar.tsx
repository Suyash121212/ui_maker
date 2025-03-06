import React from 'react';
import { useComponentStore } from '../store/componentStore';
import { Trash2, Eye, EyeOff, Copy, ArrowUp, ArrowDown } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { components, selectComponent, selectedComponentId, deleteComponent } = useComponentStore();

  return (
    <div className="space-y-4">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
        Layers
      </h3>
      
      {components.length === 0 ? (
        <p className="text-sm text-gray-500 text-center py-4">No components added yet</p>
      ) : (
        <div className="space-y-1">
          {components.map((component) => (
            <div 
              key={component.id}
              className={`flex items-center justify-between p-2 rounded text-sm ${
                selectedComponentId === component.id 
                  ? 'bg-blue-50 border-l-2 border-blue-500' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => selectComponent(component.id)}
            >
              <div className="flex items-center">
                <span className="capitalize">{component.type}</span>
                {component.props.children && typeof component.props.children === 'string' && (
                  <span className="text-gray-500 text-xs ml-2 truncate max-w-[100px]">
                    {component.props.children}
                  </span>
                )}
              </div>
              
              <div className="flex space-x-1">
                <button 
                  className="p-1 text-gray-400 hover:text-gray-700 rounded"
                  title="Toggle visibility"
                >
                  <Eye size={14} />
                </button>
                <button 
                  className="p-1 text-gray-400 hover:text-gray-700 rounded"
                  title="Duplicate"
                >
                  <Copy size={14} />
                </button>
                <button 
                  className="p-1 text-gray-400 hover:text-gray-700 rounded"
                  title="Move up"
                >
                  <ArrowUp size={14} />
                </button>
                <button 
                  className="p-1 text-gray-400 hover:text-gray-700 rounded"
                  title="Move down"
                >
                  <ArrowDown size={14} />
                </button>
                <button 
                  className="p-1 text-gray-400 hover:text-red-600 rounded"
                  title="Delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteComponent(component.id);
                  }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};