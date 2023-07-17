// Native
import { useRef } from 'react'
// Components
import { Input } from '@components/Input'
import { RoundButton } from '@components/RoundButton'
// Styles
import {
  Container,
  Content,
  LogoContainer,
  Title,
  TitleContainer,
} from './styles'
// Assets
import LogoSvg from '@assets/logoLightTheme.svg'

export function SignIn() {
  const passwordRef = useRef<any>(null)
  return (
    <Container
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Content>
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
      </Content>
    </Container>
  )
}
