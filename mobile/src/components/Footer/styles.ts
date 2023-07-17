// Native
import styled from 'styled-components/native'

type ContainerProps = {
  hasBackground: boolean
}

export const Container = styled.View<ContainerProps>`
  position: absolute;
  bottom: 0;

  align-items: center;

  width: 100%;
`
export const SvgContainer = styled.View`
  position: absolute;
  bottom: -15px;
  left: 0;
  right: 0;
`
