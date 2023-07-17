// Native
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
// Screens
import { Dashboard } from '@screens/Dashboard'
import { EditPlant } from '@screens/EditPlant'
import { NewPlant } from '@screens/NewPlant'
import { Collection } from '@screens/Collection'

type AppRoutes = {
  dashboard: undefined
  newPlant: undefined
  editPlant: undefined
  collection: undefined
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="dashboard" component={Dashboard} />
      <Screen name="newPlant" component={NewPlant} />
      <Screen name="editPlant" component={EditPlant} />
      <Screen name="collection" component={Collection} />
    </Navigator>
  )
}
