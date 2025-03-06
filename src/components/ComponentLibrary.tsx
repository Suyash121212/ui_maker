import React, { useState, useEffect } from 'react';
import { Donut as Button, Type, FormInput, Image, Layout, Square, Navigation, Upload, File } from 'lucide-react';
import { templates } from '../data/template';
import { useComponentStore } from '../store/componentStore';

export const ComponentLibrary: React.FC = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const { addComponent } = useComponentStore();

  // Load images from localStorage on mount
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('uploadedImages') || '[]');
    setUploadedImages(storedImages);
  }, []);

  // Save images to localStorage when updated
  useEffect(() => {
    localStorage.setItem('uploadedImages', JSON.stringify(uploadedImages));
  }, [uploadedImages]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const newImage = event.target.result.toString();
          setUploadedImages((prev) => [...prev, newImage]);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDragStart = (e: React.DragEvent, componentType: string, imageUrl?: string) => {
    e.dataTransfer.setData('componentType', componentType);
    if (imageUrl) {
      e.dataTransfer.setData('imageUrl', imageUrl);
    }
  };

  // const handleTemplateSelect = (templateId: string) => {
  //   const selectedTemplate = templates.find((t) => t.id === templateId);
  //   if (selectedTemplate) {
  //     addComponent(selectedTemplate.components);
  //   }
  // };
  const handleTemplateSelect = (templateId: string) => {
    const selectedTemplate = templates.find((t) => t.id === templateId);
    
    if (selectedTemplate) {
      selectedTemplate.components.forEach((component) => {
        addComponent({
          type: component.type,
          props: component.props,
        });
      });
    }
  };
  

  const componentCategories = [
    {
      name: 'Basic',
      components: [
        { type: 'button', icon: <Button size={16} />, label: 'Button' },
        { type: 'text', icon: <Type size={16} />, label: 'Text' },
        { type: 'input', icon: <FormInput size={16} />, label: 'Input' },
        { type: 'div', icon: <Layout size={16} />, label: 'Container' }, // Added div
      ]
    }
,    
    {
      name: 'Layout',
      components: [
        { type: 'card', icon: <Square size={16} />, label: 'Card' },
        { type: 'navbar', icon: <Navigation size={16} />, label: 'Navbar' },
      ]
    },
    {
      name: 'Media',
      components: [
        { type: 'image', icon: <Image size={16} />, label: 'Image' },
      ]
    },
    {
      name: 'Forms',
      components: [
        { type: 'form', icon: <Layout size={16} />, label: 'Form' },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {componentCategories.map((category) => (
        <div key={category.name}>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            {category.name}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {category.components.map((component) => (
              <div
                key={component.type}
                draggable
                onDragStart={(e) => handleDragStart(e, component.type)}
                className="flex flex-col items-center justify-center p-3 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 cursor-move transition-colors duration-150"
              >
                <div className="text-gray-700 mb-1">{component.icon}</div>
                <span className="text-xs text-gray-600">{component.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Media Upload Section */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Media</h3>
        <div className="grid grid-cols-2 gap-2">
          {/* Default Image Option */}
          <div
            draggable
            onDragStart={(e) => handleDragStart(e, 'image')}
            className="flex flex-col items-center justify-center p-3 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 cursor-move transition-colors duration-150"
          >
            <div className="text-gray-700 mb-1"><Image size={16} /></div>
            <span className="text-xs text-gray-600">Default Image</span>
          </div>

          {/* Upload Image Option */}
          <label className="flex flex-col items-center justify-center p-3 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-150">
            <Upload size={16} className="text-gray-700 mb-1" />
            <span className="text-xs text-gray-600">Choose from System</span>
            <input type="file" multiple accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
        </div>

        {/* Display Uploaded Images */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          {uploadedImages.map((image, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, 'image', image)}
              className="flex flex-col items-center justify-center p-3 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 cursor-move transition-colors duration-150"
            >
              <img src={image} alt={`Uploaded ${index}`} className="w-16 h-16 object-cover rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Templates Section */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Templates</h3>
        <div className="grid grid-cols-2 gap-2">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleTemplateSelect(template.id)}
              className="flex flex-col items-center justify-center p-3 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors duration-150"
            >
              <File size={16} className="text-gray-700 mb-1" />
              <span className="text-xs text-gray-600">{template.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
