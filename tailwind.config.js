/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#020202',
        panel: '#0a0a0a',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(16, 185, 129, 0.2), 0 10px 30px rgba(8, 145, 178, 0.2)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 20% 18%, rgba(255, 255, 255, 0.06), transparent 42%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.04), transparent 40%), linear-gradient(180deg, #000000 0%, #050505 45%, #000000 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
