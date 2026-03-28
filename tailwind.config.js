/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-main':  '#050414',
        'bg-card':  'rgba(255,255,255,0.05)',
        'bg-input': '#131025',
        violet:     '#a855f7',
        teal:       '#2EC4B6',
        gold:       '#f0c97a',
      },
      fontFamily: {
        sans:   ['Poppins', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
        vibes:  ['"Great Vibes"', 'cursive'],
      },
      backgroundImage: {
        'skills-gradient':
          'linear-gradient(135deg, #050414 0%, #0f0c29 50%, #1a0533 100%)',
      },
    },
  },
  plugins: [],
};
