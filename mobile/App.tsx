/* eslint-disable camelcase */
import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { useFonts, Imprima_400Regular } from '@expo-google-fonts/imprima'
import { Loading } from '@components/Loading'
import { THEME } from './src/theme'

import { Routes } from '@routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({ Imprima_400Regular })
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  )
}
