import { ThemeProvider } from '@contexts/Theme'
import { Home } from '@screens/Home'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <Home />
    </ThemeProvider>
  )
}
