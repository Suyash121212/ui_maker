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
            backgroundColor: "rgb(164,197,249)", 
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
      // Impressive Bold Text (Right-Aligned)
      {
        id: "comp-2",
        type: "text" as ComponentType,
        props: {
          style: { 
            position: "absolute", 
            top: "40px", 
            left:"20px", 
            fontSize: "24px", 
            fontWeight: "bold", 
            color: "#FF6B6B" 
          },
          children: "Create Stunning UI Components Effortlessly!",
        },
      },
      // Image Gallery (Three Images in a Row)
      {
        id: "comp-3",
        type: "image" as ComponentType,
        props: {
          style: { position: "absolute", top: "150px", left: "10%", width: "150px", height: "100px", borderRadius: "5px" },
          src: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      },
      {
        id: "comp-4",
        type: "image" as ComponentType,
        props: {
          style: { position: "absolute", top: "150px", left: "35%", width: "150px", height: "100px", borderRadius: "5px" },
          src: "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      },
      {
        id: "comp-5",
        type: "image" as ComponentType,
        props: {
          style: { position: "absolute", top: "150px", left: "60%", width: "150px", height: "100px", borderRadius: "5px" },
          src: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      },
      // Image Names Below
      {
        id: "comp-6",
        type: "text" as ComponentType,
        props: {
          style: { position: "absolute", top: "220px", left: "20%", fontSize: "16px", fontWeight: "bold" },
          children: "UI Design",
        },
      },
      {
        id: "comp-7",
        type: "text" as ComponentType,
        props: {
          style: { position: "absolute", top: "220px", left: "45%", fontSize: "16px", fontWeight: "bold" },
          children: "Component Library",
        },
      },
      {
        id: "comp-8",
        type: "text" as ComponentType,
        props: {
          style: { position: "absolute", top: "220px", left: "70%", fontSize: "16px", fontWeight: "bold" },
          children: "Custom Elements",
        },
      },
      // Footer with Copyright
      {
        id: "comp-9",
        type: "text" as ComponentType,
        props: {
          style: { 
            position: "absolute", 
            top:"280px",
            bottom: "100px", 
            left: "0px", 
            width: "100%", 
            height: "50px", 
            backgroundColor: "#1E293B", 
            color: "#FFFFFF", 
            textAlign: "center", 
            padding: "15px"
          },
          children: "© 2025 MyBrand. All rights reserved. | Privacy Policy | Terms of Service",
        },
      },
    ],
  },
  {
    id: "template-2",
    name: "Login Form",
    components: [
      // Background for Login Page
      {
        id: "comp-1",
        type: "div" as ComponentType,
        props: {
          style: { 
            position: "absolute", 
            top: "0px", 
            left: "0px", 
            width: "100%", 
            height: "100vh",
            background: "linear-gradient(to right,rgb(177, 179, 186),rgb(240, 240, 248))", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
        },
      },
      // Login Form Container
    //   {
    //     id: "comp-2",
    //     type: "div" as ComponentType,
    //     props: {
    //       style: { 
    //         position: "absolute",
    //         top: "150px",
    //         left: "50%",
    //         transform: "translateX(-50%)",
    //         width: "350px",
    //         padding: "30px",
    //         backgroundColor: "#FFFFFF",
    //         boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    //         borderRadius: "10px",
    //         textAlign: "center",
    //         display: "flex",
    //         flexDirection: "column",
    //         gap: "15px"
    //       },
    //     },
    //   },
      // Heading
      {
        id: "comp-3",
        type: "text" as ComponentType,
        props: {
          style: { 
            position: "absolute",
            top: "6.4285736083984375px",
            left: "185.86831665039062px",
            transform: "translateX(-50%)",
            fontSize: "22px", 
            fontWeight: "bold", 
            color: "#333" 
          },
          children: "Welcome Back!",
        },
      },
      // Email Input Field
      {
        id: "comp-4",
        type: "input" as ComponentType,
        props: {
          style: { 
            position: "absolute",
            top: "67.13168334960938px",
            left: "206.58480834960938px",
            transform: "translateX(-50%)",
            width: "80%", 
            padding: "12px", 
            borderRadius: "8px", 
            border: "1px solid #ccc", 
            boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "0.3s",
          },
          type: "email",
          placeholder: "Enter your email",
          onFocus: { boxShadow: "0px 0px 8px rgba(79, 70, 229, 0.5)" },
        },
      },
      // Password Input Field
      {
        id: "comp-5",
        type: "input" as ComponentType,
        props: {
          style: { 
            position: "absolute",
            top: "99.71427917480469px",
            left: "203px",
            transform: "translateX(-50%)",
            width: "80%", 
            padding: "12px", 
            borderRadius: "8px", 
            border: "1px solid #ccc", 
            boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "0.3s",
          },
          type: "password",
          placeholder: "Enter your password",
          onFocus: { boxShadow: "0px 0px 8px rgba(79, 70, 229, 0.5)" },
        },
      },
      // Submit Button
      {
        id: "comp-6",
        type: "button" as ComponentType,
        props: {
          style: { 
            position: "absolute",
            top: "140px",
            left: "200px",
            transform: "translateX(-50%)",
            width: "85%", 
            padding: "12px", 
            background: "linear-gradient(to right, #4F46E5, #3B82F6)", 
            color: "white", 
            border: "none", 
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          },
          children: "Login",
          onHover: { background: "linear-gradient(to right, #4338CA, #2563EB)", transform: "scale(1.05)" },
        },
      },
      // Forgot Password Link
      {
        id: "comp-7",
        type: "text" as ComponentType,
        props: {
          style: { 
            position: "absolute",
            top: "170px",
            left: "170px",
            transform: "translateX(-50%)",
            fontSize: "14px", 
            color: "#4F46E5", 
            cursor: "pointer" 
          },
          children: "Forgot Password?",
        },
      },
      // Register Link
      {
        id: "comp-8",
        type: "text" as ComponentType,
        props: {
          style: { 
            position: "absolute",
            top: "167px",
            left: "235px",
            transform: "translateX(-50%)",
            fontSize: "14px", 
            color: "#4F46E5", 
            cursor: "pointer" 
          },
          children: "Create an account",
        },
      },
    ],
  },
  
  
  
  {
    id: "template-3",
    name: "Contact Us",
    components: [
      // Main container
      {
        id: "comp-1",
        type: "div" as ComponentType,
        props: {
          style: {
            position: "absolute",
            top: "4px",
            left: "177px",
            transform: "translateX(-50%)",
            width: "100%",
            height:"70px",
            textAlign: "center",
            backgroundColor:"rgb(200,192,192)",

          },
        },
      },
  
      // Title
      {
        id: "comp-2",
        type: "text" as ComponentType,
        props: {
          style: { 
            fontSize: "28px",
            fontWeight: "bold",
            top: "12px",
            left: "192px",
            width:"200px",
            transform: "translateX(-50%)",
            position: "absolute"
          },
          children: "Contact Us",
        },
      },
  
      // Subtitle
      {
        id: "comp-3",
        type: "text" as ComponentType,
        props: {
          style: { 
            fontSize: "16px", 
            color: "#4B5563", 
            top: "55px",
            left: "175px",
            transform: "translateX(-50%)",
            position: "absolute",
            width: "80%",
            textAlign: "center",
            
          },
          children: "We'd love to hear from you! Fill out the form below or contact us directly.",
        },
      },
  
      // Form Container
      
  
      // Name Input
      {
        id: "comp-5",
        type: "input" as ComponentType,
        props: {
          type: "text",
          placeholder: "Your Name",
          style: {
            border: "1px solid #CCC",
            padding: "10px",
            left:"20px",
            top:"182px",
            width: "100%",
            marginBottom: "10px",
            borderRadius: "5px",
          },
        },
      },
  
      // Email Input
      {
        id: "comp-6",
        type: "input" as ComponentType,
        props: {
          type: "email",
          placeholder: "Your Email",
          style: {
            border: "1px solid #CCC",
            padding: "10px",
            width: "100%",
            left:"20px",
            top:"253px",
            marginBottom: "10px",
            borderRadius: "5px",
          },
        },
      },
  
      // Message Textarea
      {
        id: "comp-7",
        type: "text" as ComponentType,
        props: {
          placeholder: "Your Message",
          style: {
            border: "1px solid #CCC",
            padding: "10px",
            width: "100%",
            left:"20px",
            top:"319px",
            height: "100px",
            borderRadius: "5px",
            marginBottom: "10px",
          },
        },
      },
  
      // Send Button
      {
        id: "comp-8",
        type: "button" as ComponentType,
        props: {
          children: "Send Message",
          style: {
            top:"440px",
            left:"0px",
            backgroundColor: "#2563EB",
            color: "#FFF",
            padding: "10px",
            borderRadius: "5px",
            width: "100%",
            
            cursor: "pointer",
            marginTop: "10px"
          },
        },
      },
  
      // Office Location
      {
        id: "comp-9",
        type: "text" as ComponentType,
        props: {
          style: { 
            fontSize: "14px", 
            color: "#4B5563", 
            top: "300px",
            left: "130px",
            transform: "translateX(-50%)",
            position: "absolute",
            textAlign: "center",
            width: "100%"
          },
          children: "📍 Our Office: 123 Street, City, Country",
        },
      },
  
      // Contact Details
      {
        id: "comp-10",
        type: "text" as ComponentType,
        props: {
          style: { 
            fontSize: "14px", 
            color: "#4B5563",
            top: "300px",
            left: "300px",
            transform: "translateX(-50%)",
            position: "absolute",
            textAlign: "center",
            width: "100%"
          },
          children: "📞 Call Us: +123 456 7890 | ✉️ Email: contact@example.com",
        },
      },
  
      // Footer
      {
        id: "comp-11",
        type: "text" as ComponentType,
        props: {
          style: { 
            fontSize: "14px", 
            color: "#4B5563",
            top: "320px",
            left: "210px",
            transform: "translateX(-50%)",
            position: "absolute",
            textAlign: "center",
            width: "100%"
          },
          children: "© 2025 Company Name. All rights reserved.",
        },
      },
    ],
  }
  
  
  
];
