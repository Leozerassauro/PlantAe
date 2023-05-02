import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    green: {
      700: '#283618',
      500: '#606C38',
      200: '#CCD5AE',
    },
    gray: {
      200: '#FEFAE0',
      100: '#FFFCEC',
    },
    white: '#FFFFFF',
    orange: {
      700: '#BC6C25',
      500: '#DDA15E',
      300: '#D4A373',
    },
    yellow: {
      200: '#E9EDC9',
      100: '#FAEDCD',
    },
  },
  fonts: {
    body: 'Imprima_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
})
