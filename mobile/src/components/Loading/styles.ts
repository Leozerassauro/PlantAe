// Native
import styled from 'styled-components/native'
// Native Components
import { ActivityIndicator } from 'react-native'

type Props = {
  size: number | 'small' | 'large' | undefined
  color: string
}

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: transparent;
`

export const Spinner = styled(ActivityIndicator).attrs<Props>(
  ({ size, color }) => ({
    size,
    color,
  }),
)``
