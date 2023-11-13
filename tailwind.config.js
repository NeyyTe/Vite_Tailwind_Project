

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],

  theme: {
    extend: {
      height: {
        "5dvh": "5dvh",
        "10dvh": "10dvh",
        "20dvh": "20dvh",
        "30dvh": "30dvh",
        "40dvh": "40dvh",
        "50dvh": "50dvh",
        "60dvh": "60dvh",
        "70dvh": "70dvh",
        "80dvh": "80dvh",
        "90dvh": "90dvh",
      },

      fontFamily: {
        poppins: ["Poppins"],
        cinzel: ["Cinzel"],
      },
    },
    colors: {
      text: "var(--text)",
      background: "var(--background)",
      primary: "var(--primary)",
      primaryHover: "var(--primaryHover)",
      uiNormal: "var(--uiNormal)",
      uiHover: "var(--uiHover)",
      uiFocus: "var(--uiFocus)",
      border: "var(--border)",
      white:"var(--white)",
    },
  }, 

  
  plugins: [],
};
