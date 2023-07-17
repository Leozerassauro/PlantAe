// Native
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  gap: 30px;

  background-color: ${(props) => props.theme.colors.yellow_50};
`

export const Content = styled.View`
  flex: 1;

  align-items: center;
  gap: 30px;

  padding: 60px;
`

export const LogoContainer = styled.View`
  margin-bottom: 30px;
`

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;

  width: 100%;

  max-height: 60px;
  min-height: 60px;

  margin-bottom: 30px;

  background-color: ${(props) => props.theme.colors.orange_700};

  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.font_family.regular};
  font-size: ${(props) => props.theme.font_size.xl};
  color: ${(props) => props.theme.colors.yellow_50};
`
