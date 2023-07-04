import { Container, LogoContainer, Title, TitleContainer } from './styles'

import LogoSvg from '@assets/logoLightTheme.svg'
import { Input } from '@components/Input'
import { useRef } from 'react'
import { RoundButton } from '@components/RoundButton'

export function SignIn() {
  const passwordRef = useRef<any>(null)
  return (
    <Container>
      <LogoContainer>
        <LogoSvg />
      </LogoContainer>
      <TitleContainer>
        <Title>Login</Title>
      </TitleContainer>
      <Input
        placeholder="USUÁRIO/EMAIL"
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
        borderColor="#FA9C2F"
      />
      <Input
        placeholder="SENHA"
        isPassword
        autoCapitalize="none"
        returnKeyType="send"
        inputRef={passwordRef}
        borderColor="#FA9C2F"
      />
      <RoundButton variant="darkGreen" />
    </Container>
  )
}
