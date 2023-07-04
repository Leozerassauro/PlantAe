// Native
// Styles
import { Container, Spinner } from './styles'

type Props = {
  size: number | 'small' | 'large' | undefined
  color?: string
}

export function Loading({ size, color }: Props) {
  return (
    <Container>
      <Spinner size={size} color={color} />
    </Container>
  )
}
