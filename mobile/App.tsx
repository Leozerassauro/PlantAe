/* eslint-disable camelcase */
import { View, Text, StatusBar } from 'react-native'
import { useFonts, Imprima_400Regular } from '@expo-google-fonts/imprima'

export default function App() {
  const [fontsLoaded] = useFonts({ Imprima_400Regular })
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <Text>Open up App.tsx to start working on your app!</Text>
      ) : (
        <View />
      )}
    </View>
  )
}
