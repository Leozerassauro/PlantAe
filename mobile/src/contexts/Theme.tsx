// Native
import React, { useState, createContext, ReactNode, useEffect } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
// Themes
import { lightTheme } from '@themes/light'
// Storages
import { storageThemeGet, storageThemeSave } from '@storage/storageTheme'

export enum ThemeType {
  light = 'light',
}

export type ThemeContextDataProps = {
  theme: ThemeType
  toggleTheme: () => void
}

type ThemeProviderProps = {
  children: ReactNode
}

const themes = {
  [ThemeType.light]: lightTheme,
}

export const ThemeContext = createContext<ThemeContextDataProps>(
  {} as ThemeContextDataProps,
)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(ThemeType.light)

  useEffect(() => {
    loadTheme()
  }, [])

  async function loadTheme() {
    const savedTheme = await storageThemeGet()

    if (savedTheme) {
      const savedThemeWithType = savedTheme as ThemeType
      setTheme(savedThemeWithType)
    }
  }

  function toggleTheme() {
    let selectTheme
    if (theme === ThemeType.light) {
      selectTheme = ThemeType.light
    } else {
      selectTheme = ThemeType.light
    }
    setTheme(selectTheme)
    storageThemeSave(selectTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}