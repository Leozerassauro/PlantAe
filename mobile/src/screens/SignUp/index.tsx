// Native
import { useRef } from 'react'
// Components
import { Input } from '@components/Input'
import { RoundButton } from '@components/RoundButton'
// Styles
import {
  CadastroVerdeSvgContainer,
  Container,
  Title,
  TitleContainer,
} from './styles'
// Assets
import CadastroVerdeSvg from '@assets/cadastroVerde.svg'

export function SignUp() {
  const addressRef = useRef<any>(null)
  const phoneRef = useRef<any>(null)
  const emailRef = useRef<any>(null)
  const passwordRef = useRef<any>(null)
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>Cadastro</Title>
        </TitleContainer>
        <Input
          placeholder="NOME"
          returnKeyType="next"
          onSubmitEditing={() => addressRef.current?.focus()}
          borderColor="#606C38"
        />
        <Input
          placeholder="ENDEREÇO"
          returnKeyType="next"
          inputRef={addressRef}
          onSubmitEditing={() => phoneRef.current?.focus()}
          borderColor="#606C38"
        />
        <Input
          placeholder="CELULAR"
          returnKeyType="next"
          inputRef={phoneRef}
          onSubmitEditing={() => emailRef.current?.focus()}
          borderColor="#606C38"
        />
        <Input
          placeholder="EMAIL"
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="next"
          inputRef={emailRef}
          onSubmitEditing={() => passwordRef.current?.focus()}
          borderColor="#606C38"
        />
        <Input
          placeholder="SENHA"
          isPassword
          autoCapitalize="none"
          returnKeyType="send"
          inputRef={passwordRef}
          borderColor="#606C38"
        />
        <RoundButton variant="lightGreen" />
        <CadastroVerdeSvgContainer>
          <CadastroVerdeSvg />
        </CadastroVerdeSvgContainer>
      </Container>
    </>
  )
}
