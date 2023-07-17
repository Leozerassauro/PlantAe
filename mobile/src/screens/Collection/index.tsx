import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Slider } from '@components/Slider'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { useTheme } from 'styled-components/native'
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
