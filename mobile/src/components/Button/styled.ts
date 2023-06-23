// Native
import styled from 'styled-components/native'
// Native Components
import { TouchableOpacity } from 'react-native'

export type ButtonVariantStyleProps = 'solid' | 'outline'

type Props = {
  variant: ButtonVariantStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: red;
`
