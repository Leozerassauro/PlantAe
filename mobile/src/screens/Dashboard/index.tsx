import { Header } from '@components/Header'
import { BackgroundContainer, Container } from './styles'

import BackgroundLeaves from '@assets/backgroundLeaves.png'
import { Footer } from '@components/Footer'
import { PlantCard } from '@components/PlantCard'
import { useNavigation } from '@react-navigation/native'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

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
