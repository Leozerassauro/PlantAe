import {
  BackgroundContainer,
  ButtonContainer,
  Container,
  LogoContainer,
} from './styles'

import LogoSvg from '@assets/logoLightTheme.svg'
import BackgroundPng from '@assets/backgroundLightTheme.png'

import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

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
