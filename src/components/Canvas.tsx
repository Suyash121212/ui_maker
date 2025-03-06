import React, { useState } from 'react';
import { ComponentType } from '../types/component';
import { useComponentStore } from '../store/componentStore';
import { ComponentRenderer } from './ComponentRenderer';

interface CanvasProps {
  viewMode: 'desktop' | 'tablet' | 'mobile';
}

export const Canvas: React.FC<CanvasProps> = ({ viewMode }) => {
  const { components, addComponent, selectComponent, selectedComponentId, updateComponent } = useComponentStore();
  const [draggingComponent, setDraggingComponent] = useState<string | null>(null);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Get canvas width based on selected view mode 
  const getCanvasWidth = () => {
    switch (viewMode) {
      case 'desktop': return 'w-full max-w-6xl';
      case 'tablet': return 'w-[768px]';
      case 'mobile': return 'w-[375px]';
      default: return 'w-full';
    }
  };

  // Handle dropping a new component
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData('componentType');
    const imageUrl = e.dataTransfer.getData('imageUrl'); // Get the image URL if available
  
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    const newComponent = {
      type: componentType as ComponentType,
      props: {
        style: {
          position: 'absolute',
          left: `${x}px`,
          top: `${y}px`,
          width: componentType === 'navbar' ? '100%' : '200px',
          height: 'auto',
        },
        className: '',
        children: componentType === 'text' ? 'Text Component' : '',
        src: imageUrl || 'https://via.placeholder.com/150', // Use uploaded image or fallback
      }
    };
  
    addComponent(newComponent);
    selectComponent(newComponent.id);
  };
  

  // Allow drag over the canvas
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Handle mouse down to start dragging and select component
  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    selectComponent(id);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setDraggingComponent(id);
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  
  // Move the component while dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggingComponent) return;

    const canvasRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - canvasRect.left - offset.x;
    const y = e.clientY - canvasRect.top - offset.y;

    updateComponent(draggingComponent, {
      props: {
        ...components.find(c => c.id === draggingComponent)?.props,
        style: {
          ...components.find(c => c.id === draggingComponent)?.props.style,
          left: `${x}px`,
          top: `${y}px`,
        },
      },
    });
  };

  // Stop dragging on mouse up
  const handleMouseUp = () => {
    setDraggingComponent(null);
  };

  return (
    <div
      className={`bg-white border border-gray-300 shadow-sm h-[calc(100vh-12rem)] ${getCanvasWidth()} relative overflow-hidden`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {components.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="font-medium">Drag and drop components here</p>
            <p className="text-sm mt-2">or select a template to get started</p>
          </div>
        </div>
      )}

      {components.map((component) => (
        <div 
          key={component.id}
          onMouseDown={(e) => handleMouseDown(e, component.id)}
          className={`absolute cursor-pointer ${selectedComponentId === component.id ? 'outline outline-2 outline-blue-500' : ''}`}
          style={{
            left: component.props.style.left,
            top: component.props.style.top,
            width: component.props.style.width,
            height: component.props.style.height,
            zIndex: selectedComponentId === component.id ? 10 : 1,
          }}
        >
          <ComponentRenderer component={component} />
        </div>
      ))}
    </div>
  );
};
