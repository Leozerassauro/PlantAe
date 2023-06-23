import { Container, LogoContainer } from './styles'

import LogoSvg from '@assets/logoLightTheme.svg'
import { Button } from '@components/Button'

export function Home() {
  return (
    <Container>
      <LogoContainer>
        <LogoSvg />
      </LogoContainer>
      <Button title="Login" variant="solid" />
      <Button title="Cadastre-se" variant="outline" />
    </Container>
  )
}
