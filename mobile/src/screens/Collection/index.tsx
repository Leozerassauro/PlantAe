// Native
import { useNavigation } from '@react-navigation/native'
// Components
import { Header } from '@components/Header'
// Routes
import { AppNavigatorRoutesProps } from '@routes/app.routes'
// Styles
import { Container, Content } from './styles'

export function Collection() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleDashboard() {
    navigation.navigate('dashboard')
  }

  return (
    <Container>
      <Header
        title="Minha coleção"
        iconPosition="right"
        iconName="close"
        onPress={handleDashboard}
      />
      <Content></Content>
    </Container>
  )
}
