import { Container, RoundButton } from './styles'

type Props = {
  hasBackground?: boolean
}

export function Footer({ hasBackground = false }: Props) {
  return (
    <Container hasBackground={hasBackground}>
      <RoundButton></RoundButton>
    </Container>
  )
}
