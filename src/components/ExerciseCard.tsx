import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Heading, HStack, Icon, Image, Text, VStack } from 'native-base';

import { Entypo } from '@expo/vector-icons';

import { api } from '@services/api';
import { ExerciseDTO } from '@dtos/ExerciseDTO';

type Props = TouchableOpacityProps & {
  data: ExerciseDTO;
}

export function ExerciseCard({ data, ...rest }: Props) {
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
          resizeMode="cover"
          rounded="md"
          source={{ uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}` }}
          h={16}
          w={16}
        />

        <VStack flex={1}>
          <Heading color="white" fontFamily="heading" fontSize="lg">
            {data.name}
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            {data.series} séries x {data.repetitions} repetições
          </Text>
        </VStack>

        <Icon as={Entypo} color="gray.300" name="chevron-thin-right" />
      </HStack>
    </TouchableOpacity >
  );
}
