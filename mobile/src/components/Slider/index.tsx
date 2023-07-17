// Native
import { useState } from 'react'
import { SliderProps } from '@react-native-community/slider'
// Styles
import {
  Container,
  SliderBar,
  SliderContainer,
  SliderValue,
  Title,
} from './styles'

type Props = SliderProps & {
  title: string
  measurement: 'h/dia' | 'x/mês' | 'x/semana'
}

export function Slider({ title, measurement, ...rest }: Props) {
  const [value, setValue] = useState(0)

  console.log(value)

  return (
    <Container>
      <SliderContainer>
        <SliderBar
          style={{ height: 40 }}
          step={1}
          value={value}
          onValueChange={setValue}
          {...rest}
        />
        <SliderValue>{`${value} ${measurement}`}</SliderValue>
      </SliderContainer>
      <Title>{title}</Title>
    </Container>
  )
}
