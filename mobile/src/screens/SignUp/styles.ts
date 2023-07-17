// Native
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;

  gap: 30px;

  background-color: ${(props) => props.theme.colors.yellow_50};
`

export const Content = styled.View`
  align-items: center;

  gap: 30px;

  padding: 60px;

  margin-top: 50px;

  z-index: 1;
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

  z-index: 0;
`
