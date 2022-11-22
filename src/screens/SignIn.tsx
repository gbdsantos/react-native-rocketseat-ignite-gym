import { Image, VStack } from 'native-base';

import BackgroundImg from '@assets/background.png';

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        alt="Pessoas treinando em uma esteira"
        position="absolute"
        resizeMode="contain"
        source={BackgroundImg}
      />
    </VStack>
  )
}
