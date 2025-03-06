import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Component, ComponentType } from '../types/component';

interface ComponentStore {
  components: Component[];
  selectedComponentId: string | null;
  addComponent: (component: Omit<Component, 'id'>) => void;
  updateComponent: (id: string, updatedProps: Partial<Component>) => void;
  deleteComponent: (id: string) => void;
  selectComponent: (id: string) => void;
}

export const useComponentStore = create<ComponentStore>((set) => ({
  components: [],
  selectedComponentId: null,
  
  // addComponent: (component) => set((state) => {
  //   const newComponent = {
  //     ...component,
  //     id: uuidv4(),
  //   };
  addComponent: (component) => set((state) => {
    const newComponent = {
      ...component,
      id: uuidv4(), // Generate a unique ID
    };
  
    return {
      components: [...state.components, newComponent],
      selectedComponentId: newComponent.id, // Select the new component after adding
    };
  }),

  updateComponent: (id, updatedProps) => set((state) => ({
    components: state.components.map((component) => 
      component.id === id ? { ...component, ...updatedProps } : component
    ),
    selectedComponentId: state.selectedComponentId === id ? id : state.selectedComponentId, // Keep selection
  })),

  deleteComponent: (id) => set((state) => ({
    components: state.components.filter((component) => component.id !== id),
    selectedComponentId: state.selectedComponentId === id ? null : state.selectedComponentId, // Deselect if deleted
  })),

  selectComponent: (id) => set({
    selectedComponentId: id,
  }),
}));
