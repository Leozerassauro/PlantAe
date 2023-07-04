// Native
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
// Screens
import { Dashboard } from '@screens/Dashboard'

type AppRoutes = {
  dashboard: undefined
  newPlant: undefined
  editPlant: undefined
  myCollection: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="dashboard" component={Dashboard} />
      {/* <Screen name="newPlant" component={SignIn} />
    <Screen name="editPlant" component={SignUp} />
    <Screen name="myCollection" component={SignUp} /> */}
    </Navigator>
  )
}
