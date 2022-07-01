module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'modal-backdrop-light': 'rgba(243, 243, 243, 0.89)',
        'modal-backdrop-dark': 'rgba(38, 43, 60, 0.89)',
        'primary-dark': 'rgba(38, 43, 60, 1)',
        'secondary-dark': 'rgba(147, 155, 159, 1)',
        'primary-ligh': 'rgba(243, 243, 243, 1)',
        'primary-green': 'rgba(106, 170, 100, 1)',
        'primary-yellow': 'rgba(206, 176, 44, 1)',
        'primary-icon-light': 'rgba(102, 255, 237, 1)',
        'primary-icon-dark': 'rgba(175, 202, 255, 1)',
        'secondary-icon-dark': 'rgba(43, 68, 133, 1)',
        'secondary-icon-light': 'rgba(255, 238, 178, 1)',
        'icon-sun-primary': 'rgba(255, 193, 35, 1)',
        'icon-moon-primary': 'rgba(221, 237, 255, 1)',
        'icon-moon-secondary': 'rgba(52, 131, 249, 1)',
        'icon-sun-secondary': 'rgba(248, 131, 46, 1)',
        'board-letter': 'rgba(147, 155, 159, 0.3)',
        key: 'rgba(211, 214, 218, 1)',
        'header-dark': 'rgba(218, 220, 224, 0.03)',
        'key-dark': 'rgba(86, 95, 126, 1)',
      },
      spacing: {
        'letter-field': 'min(76px, 18%)',
        'game-container': 'min(585px, 95%)',
        modal: 'min(450px, 95%)',
      },
      maxWidth: {
        keyboard: '585px',
      },
    },
  },
  plugins: [],
}
