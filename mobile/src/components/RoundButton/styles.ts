// Native
import styled from 'styled-components/native'
// Native Components
import { TouchableOpacity } from 'react-native'
// Icons
import Entypo from '@expo/vector-icons/Entypo'

type ContainerProps = {
  variant: 'lightGreen' | 'darkGreen'
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  background-color: ${({ theme, variant }) =>
    variant === 'lightGreen' ? theme.colors.green_500 : theme.colors.green_700};

  border-radius: 50px;

  width: 65px;

  padding: 15px;
  margin-top: 30px;

  elevation: 3;
`

export const Icon = styled(Entypo).attrs(({ theme }) => ({
  size: 34,
  color: theme.colors.yellow_50,
}))``
