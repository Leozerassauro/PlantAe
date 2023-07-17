// Styles
import { Container, Icon } from './styles'

type Props = {
  variant: 'lightGreen' | 'darkGreen'
}

export function RoundButton({ variant }: Props) {
  return (
    <Container variant={variant}>
      <Icon name="chevron-right" />
    </Container>
  )
}
