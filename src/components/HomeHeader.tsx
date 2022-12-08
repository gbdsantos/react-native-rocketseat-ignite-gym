import { Heading, HStack, VStack, Text } from 'native-base';

import { UserPhoto } from './UserPhoto';

export function HomeHeader() {
  return (
    <HStack alignItems="center" bg="gray.600" pb={5} pt={16} px={8}>
      <UserPhoto
        alt="Imagem com foto do usuário"
        mr={4}
        source={{ uri: 'https://github.com/gbdsantos.png' }}
        size={16}
      />
      <VStack>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md">
          Guilherme
        </Heading>
      </VStack>
    </HStack>
  )
}
