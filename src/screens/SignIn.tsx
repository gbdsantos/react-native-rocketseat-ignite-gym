import { Center, Heading, Image, Text, VStack } from 'native-base';

import BackgroundImg from '@assets/background.png';
import LogoSVG from '@assets/logo.svg';

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        alt="Pessoas treinando em uma esteira"
        position="absolute"
        resizeMode="contain"
        source={BackgroundImg}
      />

      <Center my={24}>
        <LogoSVG />

        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Center>
        <Heading
          color="gray.100"
          fontFamily="heading"
          fontSize="xl"
          mb={6}
        >
          Acesse sua conta
        </Heading>
      </Center>
    </VStack>
  )
}
