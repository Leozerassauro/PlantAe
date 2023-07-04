import { Container, Icon, IconButton, Title } from './styles'

type Props = {
  title: string
  iconPosition: 'left' | 'right'
  iconName: string
}

export function Header({ title, iconPosition, iconName }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <IconButton iconPosition={iconPosition}>
        <Icon name={iconName} />
      </IconButton>
    </Container>
  )
}
