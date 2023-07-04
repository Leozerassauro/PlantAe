// Native
import styled from 'styled-components/native'
// Native Components
import { TouchableOpacity } from 'react-native'

export type ButtonVariantStyleProps = 'solid' | 'outline'

type Props = {
  variant: ButtonVariantStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 150px

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, variant }) =>
    variant === 'solid' ? theme.colors.green_500 : 'transparent'};


border-radius: 50px;

justify-content: center;
align-items: center;

elevation: ${({ variant }) => (variant === 'solid' ? 8 : 0)};
`

export const Title = styled.Text<Props>`
  color: ${({ theme, variant }) =>
    variant === 'solid' ? theme.colors.yellow_50 : theme.colors.green_500};

  font_size: ${(props) => props.theme.font_size.xl};
  font-family: ${(props) => props.theme.font_family.regular};
`
