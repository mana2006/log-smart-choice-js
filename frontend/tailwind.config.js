/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Zen Old Mincho', 'Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
    },
    extend: {
      brightness: {
        60: '.6',
      },
      backgroundImage: {
        'select-down': "url('/src/assets/select_down.svg')",
        'heart-icon': "url('/src/assets/heart.svg')"
      },
      content: {
        'heart-icon': "url('/src/assets/heart.svg')"
      }
    },
    borderWidth: {
      DEFAULT: '1px'
    },
    backgroundSize: {
      '50%': '50%',
      '75%': '75%',
      '16': '4rem',
    }
  },
  plugins: [],
};
