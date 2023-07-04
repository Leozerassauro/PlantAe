// Native
import { TouchableOpacityProps } from 'react-native'
// Components
import { Loading } from '../Loading'
// Styles
import { ButtonVariantStyleProps, Container, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  variant?: ButtonVariantStyleProps
  isLoading?: boolean
}

export function Button({
  title,
  variant = 'solid',
  isLoading = false,
  ...rest
}: Props) {
  return (
    <Container variant={variant} {...rest}>
      {isLoading ? (
        <Loading size="small" />
      ) : (
        <Title variant={variant}>{title}</Title>
      )}
    </Container>
  )
}
