// Native
import { useNavigation } from '@react-navigation/native'
// Components
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { PlantCard } from '@components/PlantCard'
// Routes
import { AppNavigatorRoutesProps } from '@routes/app.routes'
// Styles
import { BackgroundContainer, Container } from './styles'
// Assets
import BackgroundLeaves from '@assets/backgroundLeaves.png'

export function Dashboard() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleAddNewPlant() {
    navigation.navigate('newPlant')
  }

  function handleEditPlant() {
    navigation.navigate('editPlant')
  }

  function handleCollection() {
    navigation.navigate('collection')
  }

  return (
    <Container>
      <BackgroundContainer source={BackgroundLeaves} resizeMode="cover" />
      <Header
        title="Home"
        iconPosition="right"
        iconName="user-circle-o"
        onPress={handleCollection}
      />
      <PlantCard onPress={handleEditPlant} />
      <Footer variant="add" hasBackground onPress={handleAddNewPlant} />
    </Container>
  )
}
