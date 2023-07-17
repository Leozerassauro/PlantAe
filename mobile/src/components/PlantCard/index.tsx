// Native
import { useRef } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'
// Styles
import {
  Card,
  Container,
  IconContainer,
  Image,
  ImageContainer,
  LinearBorder,
  Title,
} from './styles'
// Assets
import plantExample from '@assets/plantExample.png'

type Props = TouchableOpacityProps & {}

export function PlantCard({ ...rest }: Props) {
  const data = ['teste', 'teste1', 'teste2', 'teste3', 'teste4']
  const cardRef = useRef(null)

  const { colors } = useTheme()

  return (
    <Container
      data={data}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <LinearBorder colors={[colors.green_700, colors.orange_700]}>
          <Card activeOpacity={0.8} ref={cardRef} {...rest}>
            <ImageContainer>
              <Image source={plantExample} />
            </ImageContainer>
            <Title>Costela de Adão</Title>
            <IconContainer></IconContainer>
          </Card>
        </LinearBorder>
      )}
      contentContainerStyle={{
        paddingBottom: 180,
      }}
    />
  )
}
