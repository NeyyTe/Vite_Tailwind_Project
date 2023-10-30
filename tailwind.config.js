/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
fontFamily:{
  'poppins': ['Poppins','sans serif']
}

    },
    colors: {
      'text': 'hsl(var(--text))',
      'background': 'hsl(var(--background))',
      'primary': 'hsl(var(--primary))',
      'secondary': 'hsl(var(--secondary))',
      'accent': 'hsl(var(--accent))',
      'border': 'hsl(var(--border))',
     },
     
  },
  plugins: [],
}

