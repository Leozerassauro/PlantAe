// Native
import AsyncStorage from '@react-native-async-storage/async-storage'
// Contexts
import { ThemeType } from '@contexts/Theme'
// Storages
import { THEME_STORAGE } from '@storage/storageConfig'

export async function storageThemeSave(theme: ThemeType) {
  await AsyncStorage.setItem(THEME_STORAGE, theme)
}

export async function storageThemeGet() {
  const theme = await AsyncStorage.getItem(THEME_STORAGE)

  return theme
}