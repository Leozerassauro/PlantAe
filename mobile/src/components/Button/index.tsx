import { TouchableOpacityProps } from 'react-native'

import { ButtonVariantStyleProps, Container } from './styled'

type Props = TouchableOpacityProps & {
  title: string
  variant: ButtonVariantStyleProps
  isLoading?: boolean
}

export function Button({ variant, ...rest }: Props) {
  return <Container variant={variant} {...rest}></Container>
}
