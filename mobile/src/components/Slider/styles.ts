// Native
import styled from 'styled-components/native'
// Native Components
import Slider from '@react-native-community/slider'

export const Container = styled.View``

export const SliderContainer = styled.View`
  flex-direction: row;
`

export const SliderBar = styled(Slider)`
  flex: 1;
`

export const SliderValue = styled.Text`
  position: absolute;

  right: -10px;
  bottom: -10px;

  color: ${(props) => props.theme.colors.green_700};
  font-size: ${(props) => props.theme.font_size.sm};
  font-family: ${(props) => props.theme.font_family.regular};
`

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.green_700};
  font-size: ${(props) => props.theme.font_size.md};
  font-family: ${(props) => props.theme.font_family.regular};
`
