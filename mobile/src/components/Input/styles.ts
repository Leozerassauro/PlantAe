import styled, { css } from 'styled-components/native'

type ContainerProps = {
  isFocused: boolean
  isInvalid: boolean
  borderColor: string
}

export const Container = styled.TextInput<ContainerProps>`
  width: 100%;

  max-height: 50px;
  min-height: 50px;

  padding: 10px 20px;

  border: 2px solid ${(props) => props.borderColor};

  border-radius: 50px;

  color: ${(props) => props.theme.colors.green_700};
`
