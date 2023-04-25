import { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
  useToast,
  VStack
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '@components/Button';

import { Feather } from '@expo/vector-icons';
import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';

import { api } from '@services/api';
import { AppError } from '@utils/AppError';
import { ExerciseDTO } from '@dtos/ExerciseDTO';
import { Loading } from '@components/Loading';

type RouteParamsProps = {
  exerciseId: string;
}

export function Exercise() {
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);
  const [isLoading, setIsLoading] = useState(true);
  const { goBack } = useNavigation();

  const route = useRoute();
  const { exerciseId } = route.params as RouteParamsProps;

  const toast = useToast();

  function handleGoBack() {
    goBack();
  }

  async function fetchExerciseDetails() {
    try {
      setIsLoading(true);
      const response = await api.get(`/exercises/${exerciseId}`);
      setExercise(response.data);

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível carregar os detalhes do exercício.';

      toast.show({
        bgColor: 'red.500',
        placement: 'top',
        title
      })
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchExerciseDetails();
  }, [exerciseId]);

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>

        <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
          <Heading color="gray.100" fontFamily="heading" fontSize="lg" flexShrink={1}>
            {exercise.name}
          </Heading>

          <HStack alignItems="center">
            <BodySvg />

            <Text color="gray.200" ml={1} textTransform="capitalize">
              {exercise.group}
            </Text>
          </HStack>
        </HStack>
      </VStack>

      {isLoading ? <Loading /> :
        <ScrollView>
          <VStack p={8}>
            <Box mb={3} overflow="hidden" rounded="lg">
              <Image
                h={80}
                w="full"
                alt="Nome do exercício"
                source={{ uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}` }}
                resizeMode="cover"
                rounded="lg"
              />
            </Box>

            <Box bg="gray.600" rounded="md" pb={4} px={4}>
              <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
                <HStack>
                  <SeriesSvg />
                  <Text color="gray.200" ml="2">
                    {exercise.series} séries
                  </Text>
                </HStack>

                <HStack>
                  <RepetitionsSvg />
                  <Text color="gray.200" ml="2">
                    {exercise.repetitions} repetições
                  </Text>
                </HStack>
              </HStack>

              <Button
                title="Marcar como realizado"
              />
            </Box>
          </VStack>
        </ScrollView>
      }
    </VStack>
  );
}
