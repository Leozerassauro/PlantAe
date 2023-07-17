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

export const AddPhotoContent = styled.TouchableOpacity`
  align-items: center;

  gap: 10px;
`

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.green_700};
  font-size: ${(props) => props.theme.font_size.sm};
  font-family: ${(props) => props.theme.font_family.regular};
`

export const SliderContent = styled.View`
  gap: 15px;

  margin-top: 20px;
`
