// Native
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.yellow_50};
`

export const BackgroundContainer = styled.ImageBackground`
  position: absolute;

  width: 100%;
  height: 100%;
`
