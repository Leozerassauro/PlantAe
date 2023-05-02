import { IInputProps, Input as NativeBaseInput } from 'native-base'

type Props = IInputProps & {
  borderFocused: string
}

export function Input({ borderFocused, ...rest }: Props) {
  return (
    <NativeBaseInput
      py={3}
      px={5}
      fontSize="md"
      placeholderTextColor="green.700"
      borderWidth={2}
      rounded="full"
      _focus={{ bg: 'transparent', borderColor: borderFocused }}
      {...rest}
    ></NativeBaseInput>
  )
}
