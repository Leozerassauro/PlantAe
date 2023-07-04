import styled from 'styled-components/native'
import Entypo from '@expo/vector-icons/Entypo'
import { TouchableOpacity } from 'react-native'

type ContainerProps = {
  variant: 'lightGreen' | 'darkGreen'
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  background-color: ${({ theme, variant }) =>
    variant === 'lightGreen' ? theme.colors.green_500 : theme.colors.green_700};

  border-radius: 50px;

  padding: 15px;

  z-index: 1;

  elevation: 3;
`

export const Icon = styled(Entypo).attrs(({ theme }) => ({
  size: 34,
  color: theme.colors.yellow_50,
}))``
