import { ComponentType } from "../types/component";

export const templates = [
  {
    id: "template-1",
    name: "Basic Layout",
    components: [
      // Navbar with logo, menu, and button
      {
        id: "comp-1",
        type: "navbar" as ComponentType,
        props: {
          style: { 
            position: "absolute", 
            top: "0px", 
            left: "0px", 
            width: "100%", 
            height: "60px", 
            backgroundColor: "#1E293B", 
            color: "#FFFFFF", 
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px"
          },
          children: [
            { type: "text", props: { children: "MyBrand", style: { fontSize: "20px", fontWeight: "bold" } } },
            { type: "menu", props: { items: ["Home", "About", "Services", "Contact"], style: { display: "flex", gap: "15px" } } },
            { type: "button", props: { children: "Sign Up", style: { backgroundColor: "#4F46E5", padding: "8px 16px", borderRadius: "5px", cursor: "pointer" } } }
          ],
        },
      },
      // Hero Section with Title, Subtitle, and Button
      {
        id: "comp-2",
        type: "container" as ComponentType,
        props: {
          style: { 
            position: "absolute", 
            top: "80px", 
            left: "50%", 
            transform: "translateX(-50%)",
            width: "80%", 
            textAlign: "center",
            padding: "50px 20px",
            background: "linear-gradient(to right, #667eea, #764ba2)",
            color: "#ffffff",
            borderRadius: "10px"
          },
          children: [
            { type: "text", props: { children: "Welcome to Our Platform", style: { fontSize: "28px", fontWeight: "bold" } } },
            { type: "text", props: { children: "Create, Design, and Export Your UI Components Seamlessly.", style: { fontSize: "18px", marginTop: "10px" } } },
            { type: "button", props: { children: "Get Started", style: { marginTop: "20px", padding: "10px 20px", backgroundColor: "#FF6B6B", color: "#FFF", borderRadius: "5px", cursor: "pointer" } } }
          ],
        },
      },
    ],
  },
  {
    id: "template-2",
    name: "Hero Section",
    components: [
      {
        id: "comp-3",
        type: "image" as ComponentType,
        props: {
          style: { position: "absolute", top: "50px", left: "50px", width: "100%" },
          src: "https://via.placeholder.com/600x300",
        },
      },
      {
        id: "comp-4",
        type: "button" as ComponentType,
        props: {
          style: { position: "absolute", top: "400px", left: "50px" },
          children: "Get Started",
        },
      },
    ],
  },
];
