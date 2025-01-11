const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF0F0',   // Very Light Red
          100: '#FFD6D6',  // Light Red
          200: '#FFB3B3',  // Soft Red
          300: '#FF8080',  // Muted Red
          400: '#FF4D4D',  // Bright Red
          500: '#FF1A1A',  // Vibrant Red
          600: '#E60000',  // Deep Red
          700: '#CC0000',  // Dark Red
          800: '#B30000',  // Very Dark Red
          900: '#990000',  // Intense Red
        },
        secondary: {
          50: '#FFF5F5',   // Lightest Red
          100: '#FFE6E6',  // Light Salmon
          200: '#FFCCCC',  // Soft Salmon
          300: '#FFB2B2',  // Muted Salmon
          400: '#FF9999',  // Light Coral
          500: '#FF8080',  // Coral
          600: '#FF6666',  // Soft Coral
          700: '#FF4D4D',  // Bright Coral
          800: '#FF3333',  // Deep Coral
          900: '#FF1A1A',  // Intense Coral
        },
        gray: colors.slate,
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem'
      },
      animation: {
        'blob': 'blob 7s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
          '50%': { 
            transform: 'scale(1.05)',
            opacity: '0.8'
          },
        },
      },
    },
  },
  plugins: [],
}
