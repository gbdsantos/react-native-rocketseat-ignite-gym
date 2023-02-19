import { TouchableOpacity } from 'react-native';
import { Heading, HStack, Icon, VStack, Text } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

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

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontFamily="heading" fontSize="md">
          Guilherme
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          color="gray.200"
          name="logout"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
}
