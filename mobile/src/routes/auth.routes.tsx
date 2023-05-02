/* eslint-disable no-redeclare */
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { Homepage } from '@screens/Homepage'
import { SignIn } from '@screens/SignIn'

type AuthRoutes = {
  homepage: undefined
  signIn: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="homepage" component={Homepage} />
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  )
}
