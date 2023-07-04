import styled, { css } from 'styled-components/native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

type IconButtonType = {
  iconPosition: 'left' | 'right'
}

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.green_500};

  height: 110px;
  padding: 20px;

  border-bottom-left-radius: 50px;

  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`

export const Title = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.font_family.regular};
  font-size: ${(props) => props.theme.font_size.xl};
  color: ${(props) => props.theme.colors.yellow_50};
`

export const IconButton = styled.TouchableOpacity<IconButtonType>`
  position: absolute;

  bottom: 20px;

  ${(props) =>
    props.iconPosition === 'left'
      ? css`
          left: 30px;
        `
      : css`
          right: 30px;
        `}
`

export const Icon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.orange_500,
}))``
