/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        scrollLeft: 'scrollLeft 8s linear infinite',
        slideDown: 'slideDown 0.6s ease forwards',
        fadeInUp: 'fadeInUp 1.5s ease-out',
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-120%)' },
        },
        slideDown: {
          from: { transform: 'translateY(-100%)', opacity: '0' },
          to: { transform: 'translateY(0%)', opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translate(-50%, -40%)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%)' },
        },
      },
      scale: {
        '102': '1.02',
      },

       colors: {
        'gold': {
          50: '#fffdf2',
          100: '#fef9e7',
          200: '#fcf3cf',
          300: '#f9e79f',
          400: '#f7dc6f',
          500: '#f4d03f', 
          600: '#d4ac0d',
          700: '#b7950b',
          800: '#9a7d0a',
          900: '#7d6608',
        },
        'fashion-purple': '#8a2be2',
        'fashion-pink': '#ff69b4',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],


}