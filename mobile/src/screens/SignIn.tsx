import { Center, VStack } from 'native-base'

import LogoSvg from '@assets/logoDark.svg'
import { Input } from '@components/Input'
import { Title } from '@components/Title'

export function SignIn() {
  return (
    <VStack flex={1}>
      <Center flex={1}>
        <LogoSvg width={150} />
        <VStack w="full" p={16}>
          <Title
            title="Login"
            variant="TopLeftBottomRight"
            bg="orange.700"
            mb={10}
          />
          <Input
            borderColor="orange.700"
            borderFocused="green.700"
            placeholder="EMAIL"
            mb={8}
          />
          <Input
            borderColor="orange.700"
            borderFocused="green.700"
            placeholder="SENHA"
          />
        </VStack>
      </Center>
    </VStack>
  )
}
