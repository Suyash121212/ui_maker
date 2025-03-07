import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Component } from '../types/component';

interface ComponentStore {
  components: Component[];
  selectedComponentId: string | null;
  addComponent: (component: Omit<Component, 'id'>, templateId?: string) => void;
  updateComponent: (id: string, updatedProps: Partial<Component>) => void;
  deleteComponent: (id: string) => void;
  selectComponent: (id: string) => void;
  deleteTemplate: (templateId: string) => void; // ✅ Deletes only template components
  deleteAllComponents: () => void; // ✅ Deletes all components at once
}

export const useComponentStore = create<ComponentStore>((set) => ({
  components: [],
  selectedComponentId: null,

  addComponent: (component, templateId = '') =>
    set((state) => {
      const newComponent = {
        ...component,
        id: uuidv4(),
        templateId, // ✅ Store templateId for tracking
      };
      return {
        components: [...state.components, newComponent],
        selectedComponentId: newComponent.id,
      };
    }),

  updateComponent: (id, updatedProps) =>
    set((state) => ({
      components: state.components.map((component) =>
        component.id === id ? { ...component, ...updatedProps } : component
      ),
      selectedComponentId: state.selectedComponentId === id ? id : state.selectedComponentId,
    })),

  deleteComponent: (id) =>
    set((state) => ({
      components: state.components.filter((component) => component.id !== id),
      selectedComponentId: state.selectedComponentId === id ? null : state.selectedComponentId,
    })),

  selectComponent: (id) => set({
    selectedComponentId: id,
  }),

  deleteTemplate: (templateId) =>
    set((state) => {
      const updatedComponents = state.components.filter(
        (component) => component.templateId !== templateId // ✅ Deletes only template-related components
      );

      return {
        components: updatedComponents,
        selectedComponentId: updatedComponents.some((c) => c.id === state.selectedComponentId)
          ? state.selectedComponentId
          : null,
      };
    }),

  deleteAllComponents: () => set({ components: [], selectedComponentId: null }), // ✅ Deletes everything
}));
