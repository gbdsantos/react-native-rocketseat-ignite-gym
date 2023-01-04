import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Heading, HStack, Icon, Image, Text, VStack } from 'native-base';

import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {

}

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        alignItems="center"
        bg="gray.500"
        mb={3}
        p={2}
        pr={4}
        rounded="md"
      >
        <Image
          alt="Image do exercício"
          mr={4}
          resizeMode="center"
          rounded="md"
          source={{ uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg' }}
          h={16}
          w={16}
        />

        <VStack flex={1}>
          <Heading color="white" fontSize="lg">
            Remada unilateral
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} color="gray.300" name="chevron-thin-right" />
      </HStack>
    </TouchableOpacity >
  );
}
