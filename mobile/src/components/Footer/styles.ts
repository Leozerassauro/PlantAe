import styled from 'styled-components/native'

type ContainerProps = {
  hasBackground: boolean
}

export const Container = styled.View<ContainerProps>`
  position: absolute;
  bottom: 0;

  height: 115px;
  width: 100%;

  background-color: ${(props) =>
    props.hasBackground ? props.theme.colors.green_700 : 'transparent'};
`
export const RoundButton = styled.TouchableOpacity``
