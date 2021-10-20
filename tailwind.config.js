module.exports = {
  mode: 'jit',
  purge: ['./**/*.{liquid,html}'],
  darkMode: false,
  theme: {
    screens: {
      'mobile': { max: '640px' },
      'mobile+': { min: '641px' },
      'tablet': { max: '768px' },
      'tablet+': { min: '769px' },
      'desktop': { max: '1280px' },
      'desktop+': { min: '1281px' },
    },
    fontFamily: {
      'heading': 'var(--font-heading)',
      'body': 'var(--font-body)',
      'mono': 'monospace',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          dark: 'var(--primary-color-dark)',
        },
        secondary: {
          DEFAULT: 'var(--secondary-color)',
          dark: 'var(--secondary-color-dark)',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
