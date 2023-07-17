// Native
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  gap: 30px;

  justify-content: center;
  align-items: center;

  padding: 60px;

  background-color: ${(props) => props.theme.colors.yellow_50};
`

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;

  width: 100%;

  max-height: 60px;
  min-height: 60px;

  margin-bottom: 30px;

  background-color: ${(props) => props.theme.colors.green_500};

  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.font_family.regular};
  font-size: ${(props) => props.theme.font_size.xl};
  color: ${(props) => props.theme.colors.yellow_50};
`
export const CadastroVerdeSvgContainer = styled.View`
  position: absolute;

  bottom: 0;
  right: 0;
`
