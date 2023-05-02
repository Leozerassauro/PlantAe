import { IButtonProps, Button as NativeBaseButton } from 'native-base'

type Props = IButtonProps & {
  title: string
  variant: 'solid' | 'outline'
}

export function Button({ variant, title, ...rest }: Props) {
  return (
    <NativeBaseButton
      bg={variant === 'solid' ? 'green.500' : 'transparent'}
      _text={{
        color: variant === 'solid' ? 'gray.100' : 'green.500',
        fontSize: 'lg',
      }}
      rounded={variant === 'solid' ? 'full' : 'none'}
      shadow={variant === 'solid' ? 3 : 'none'}
      _pressed={{
        bg: variant === 'solid' ? 'green.200' : 'transparent',
        _text: {
          color: variant === 'solid' ? 'green.500' : 'green.700',
        },
      }}
      {...rest}
    >
      {title}
    </NativeBaseButton>
  )
}
