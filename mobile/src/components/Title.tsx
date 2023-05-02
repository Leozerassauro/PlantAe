import { Center, ICenterProps, Text } from 'native-base'

type Props = ICenterProps & {
  title: string
  variant: 'TopRightBottomLeft' | 'TopLeftBottomRight'
}

export function Title({ title, variant, ...rest }: Props) {
  return (
    <Center
      h={12}
      borderTopLeftRadius={variant === 'TopLeftBottomRight' ? 0 : '3xl'}
      borderBottomRightRadius={variant === 'TopLeftBottomRight' ? 0 : '3xl'}
      borderTopRightRadius={variant === 'TopRightBottomLeft' ? 0 : '3xl'}
      borderBottomLeftRadius={variant === 'TopRightBottomLeft' ? 0 : '3xl'}
      {...rest}
    >
      <Text fontSize="xl" color="gray.200">
        {title}
      </Text>
    </Center>
  )
}
