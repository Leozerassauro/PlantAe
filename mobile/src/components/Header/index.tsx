// Native
import { TouchableOpacityProps } from 'react-native'
// Styles
import { Container, Icon, IconButton, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  iconPosition: 'left' | 'right'
  iconName: string
}

export function Header({ title, iconPosition, iconName, ...rest }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <IconButton iconPosition={iconPosition} {...rest}>
        <Icon name={iconName} />
      </IconButton>
    </Container>
  )
}
