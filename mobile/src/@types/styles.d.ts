import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      green_700: string
      green_500: string

      yellow_500: string
      yellow_50: string

      orange_700: string
      orange_500: string

      blue_500: string

      white: string
    }
    font_family: {
      regular: string
    }
    font_size: {
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
}
