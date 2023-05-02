import { Center, Image, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logoDark.svg'
import { Button } from '@components/Button'

export function Homepage() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleSignIn() {
    navigation.navigate('signIn')
  }

  return (
    <VStack flex={1}>
      <Image
        source={BackgroundImg}
        alt="Leaf"
        resizeMode="contain"
        position={'absolute'}
      />
      <Center flex={1}>
        <LogoSvg />
        <VStack mt={20}>
          <Button variant="solid" title="Login" onPress={handleSignIn} />
          <Button variant="outline" title="Cadastrar-se" />
        </VStack>
      </Center>
    </VStack>
  )
}
