export type ComponentType = 
  | 'button' 
  | 'text' 
  | 'input' 
  | 'card' 
  | 'image' 
  | 'navbar' 
  | 'form'
  | 'div'; // ✅ Added div component

export interface ComponentStyle {
  position?: string;
  left?: string;
  top?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
  padding?: string;
  margin?: string;
  
  // ✅ Added Flex/Grid properties for better layout control
  display?: string; // e.g., 'flex', 'grid', 'block'
  flexDirection?: string; // e.g., 'row', 'column'
  justifyContent?: string; // e.g., 'center', 'space-between'
  alignItems?: string; // e.g., 'center', 'flex-start'
  gap?: string; // e.g., '10px'

  [key: string]: string | undefined;
}

export interface ComponentProps {
  style: ComponentStyle;
  className?: string; // Made optional to avoid unnecessary empty values
  children?: string | React.ReactNode;
  placeholder?: string;
  src?: string;
  alt?: string;
  [key: string]: any;
}

export interface Component {
  templateId: string;
  id: string;
  type: ComponentType;
  props: ComponentProps;
}
