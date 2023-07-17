import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.yellow_50};
`

export const Content = styled.View`
  flex: 1;

  gap: 35px;

  padding: 60px;
`
