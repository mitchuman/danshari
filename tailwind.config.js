module.exports = {
  mode: 'jit',
  purge: ['./**/*.{liquid,html}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'heading': ['var(--font-heading)'],
      'body': ['var(--font-body)'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
