// Native
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
// Components
// import { Loading } from '@components/Default/Loading'
// Hooks
// import { useAuth } from '@hooks/useAuth'
// Routes
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

export function Routes() {
  // const { colors } = useTheme()

  // const { user, isLoadingUserStorageData } = useAuth()

  const theme = DefaultTheme

  // if (isLoadingUserStorageData) {
  //   return <Loading size="large" />
  // }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer theme={theme}>{<AppRoutes />}</NavigationContainer>
    </View>
  )
}
