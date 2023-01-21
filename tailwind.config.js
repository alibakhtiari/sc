module.exports = {
  content: [
    './**/*.html',
    './js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      '2xl': {'min': '1535px'},
      'xl': {'min': '1279px'},
      'lg': {'min': '1024px'},
      'md': {'min': '768px'},
      'sm': {'min': '320px' , 'max': '480px'},
    },
    extend: {
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        gray: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A2A2A8',
          500: '#6E6E76',
          600: '#52525A',
          700: '#3F3F45',
          800: '#2E2E33',
          900: '#1D1D20',
        },
        s:{
          50: '#061962',
          100: '#f6465d',
          200: '#0ecb81',
          300: '#0040ff',
          400: '#fcd535',
          500: '#F0B90B',
          600: '#fbf6f1',
          700: '#eff4fe',
          800: '#2533cc',
          900: '#e9ebfa'
        },
        blue:{
          50: '#e6e8ef',
          100: '#cdd1e0',
          200: '#b4bad0',
          300: '#9ba3c0',
          400: '#838cb1',
          500: '#6a75a1',
          600: '#515e91',
          700: '#384781',
          800: '#1f3072',
          900: '#061962'
        },
        gold:{
          50: '#fef8e7',
          100: '#fcf1ce',
          200: '#fbeab6',
          300: '#f9e39d',
          400: '#f8dc85',
          500: '#f6d56d',
          600: '#f5ce54',
          700: '#f3c73c',
          800: '#f2c023',
          900: '#F0B90B',
        }

      },
      outline: {
        blue: '2px solid rgba(0, 112, 244, 0.5)',
      },
      spacing: {
        128: '32rem',
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.63rem', { lineHeight: '1.35' }],
        '3xl': ['2.63rem', { lineHeight: '1.24' }],
        '4xl': ['3.5rem', { lineHeight: '1.18' }],
        '5xl': ['4rem', { lineHeight: '1.16' }],
        '6xl': ['5.5rem', { lineHeight: '1.11' }],
      },
      inset: {
        '1/2': '50%',
        full: '100%',
      },
      minWidth: {
        10: '2.5rem',
      },
      scale: {
        98: '.98',
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' },
        },
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
