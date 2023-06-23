import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string
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
