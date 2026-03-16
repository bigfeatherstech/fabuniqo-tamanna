/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans': ['Roboto Flex', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    

        sans: ["Roboto Flex", "system-ui", "sans-serif"],
       display: ["Orbitron", "sans-serif"],
       serif: ["Noto Serif", "serif"],

            lato: ["Lato",  "sans-serif"],
     Rubik: ["Rubik", "sans-serif"],
     outfit: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        
      },
      colors: {
     
        'secondary': '#0F0F0F', 
        'accent': '#FFD700', // Gold accent
        'fab-gold': '#d1a743', // Your brand gold
        'fab-dark': '#0e0e0e',
        'fab-pink':"#D36E6E",
       'fab-lightpink':"#FAE7EB",

      
       
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}