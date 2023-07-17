import { LinearGradient } from 'expo-linear-gradient'

import styled from 'styled-components/native'

export const Container = styled.FlatList`
  flex: 1;
`

export const LinearBorder = styled(LinearGradient)`
  align-self: center;

  width: 280px;
  height: 320px;

  border-radius: 15px;

  padding: 4px;

  margin-top: 20px;
`

export const Card = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  gap: 10px;

  background: ${(props) => props.theme.colors.white};

  border-radius: 10px;

  padding: 20px;
`

export const ImageContainer = styled.View`
  border-radius: 8px;
`

export const Image = styled.Image`
  height: 180px;
`

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.green_700};
  font-size: ${(props) => props.theme.font_size.lg};
  font-family: ${(props) => props.theme.font_family.regular};

  font-weight: bold;
`

export const IconContainer = styled.View`
  width: 100%;

  /* flex-direction: row;

  justify-content: space-around;
  align-items: center; */
`
