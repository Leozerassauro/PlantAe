// Native
import { StatusBar } from 'expo-status-bar'
import { useFonts, Imprima_400Regular } from '@expo-google-fonts/imprima'
// Contexts
import { ThemeProvider } from '@contexts/Theme'
// Screens
import { Loading } from '@components/Loading'

import { Routes } from '@routes/index'

export default function App() {
  const [fontLoaded] = useFonts({
    Imprima_400Regular,
  })
  return (
    <ThemeProvider>
      <StatusBar style="light" translucent />
      {fontLoaded ? <Routes /> : <Loading size="large" color="#606C38" />}
    </ThemeProvider>
  )
}
