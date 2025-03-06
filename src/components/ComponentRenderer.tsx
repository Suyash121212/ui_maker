import React from 'react';
import { Component } from '../types/component';

interface ComponentRendererProps {
  component: Component;
}

export const ComponentRenderer: React.FC<ComponentRendererProps> = ({ component }) => {
  const { type, props } = component;
  
  switch (type) {
    case 'button':
      return (
        <button 
          style={props.style}
          className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${props.className}`}
        >
          {props.children || 'Button'}
        </button>
      );
    
    case 'text':
      return (
        <p 
          style={props.style}
          className={`${props.className}`}
        >
          {props.children || 'Text Component'}
        </p>
      );
    
    case 'input':
      return (
        <input 
          type="text"
          placeholder={props.placeholder || 'Input field'}
          style={props.style}
          className={`border border-gray-300 rounded px-3 py-2 w-full ${props.className}`}
        />
      );
    
    case 'card':
      return (
        <div 
          style={props.style}
          className={`bg-white border border-gray-200 rounded-lg shadow p-4 ${props.className}`}
        >
          {props.children || (
            <>
              <h3 className="text-lg font-medium mb-2">Card Title</h3>
              <p className="text-gray-600">Card content goes here. This is a sample card component.</p>
            </>
          )}
        </div>
      );
    
    case 'image':
      return (
        <img 
          src={props.src || 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}
          alt={props.alt || 'Image'}
          style={props.style}
          className={`object-cover ${props.className}`}
        />
      );
    
    case 'navbar':
      return (
        <nav 
          style={props.style}
          className={`bg-white shadow px-4 py-3 flex items-center justify-between ${props.className}`}
        >
          <div className="font-bold text-xl">Logo</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </nav>
      );
    
    case 'form':
      return (
        <form 
          style={props.style}
          className={`space-y-4 ${props.className}`}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      );
    
    default:
      return <div>Unknown component type: {type}</div>;
  }
};
