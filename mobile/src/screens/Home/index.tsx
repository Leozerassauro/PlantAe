// Native
import { useNavigation } from '@react-navigation/native'
// Components
import { Button } from '@components/Button'
// Routes
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
// Styles
import {
  BackgroundContainer,
  ButtonContainer,
  Container,
  LogoContainer,
} from './styles'
// Assets
import LogoSvg from '@assets/logoLightTheme.svg'
import BackgroundPng from '@assets/backgroundLightTheme.png'

export function Home() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleSignIn() {
    navigation.navigate('signIn')
  }

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  return (
    <Container>
      <BackgroundContainer source={BackgroundPng} resizeMode="cover" />
      <LogoContainer>
        <LogoSvg />
      </LogoContainer>
      <ButtonContainer>
        <Button title="login" variant="solid" onPress={handleSignIn} />
        <Button
          title="cadastrar-se"
          variant="outline"
          onPress={handleNewAccount}
        />
      </ButtonContainer>
    </Container>
  )
}
