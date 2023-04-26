import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Heading, SectionList, Text, useToast, VStack } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';

import { api } from '@services/api';
import { AppError } from '@utils/AppError';

export function History() {
  const [isLoading, setIsLoading] = useState(true);
  const [exercises, setExercises] = useState([
    {
      title: '25.01.23',
      data: ['Puxada frontal', 'Remada unilateral']
    },
    {
      title: '26.01.23',
      data: ['Puxada frontal']
    }
  ]);

  const toast = useToast();

  async function fetchHistory() {
    try {
      setIsLoading(true);
      const response = await api.get('/history');
      console.log(response.data);

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível carregar o histórico.';

      toast.show({
        bgColor: 'red.500',
        placement: 'top',
        title
      });
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchHistory();
  }, []));

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
        keyExtractor={item => item}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda. {'\n'}
            Vamos fazer exercícios hoje?
          </Text>
        )}
        renderItem={({ item }) => (
          <HistoryCard />
        )
        }
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontFamily="heading" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        sections={exercises}
        showsVerticalScrollIndicator={false}
        px={8}
      />


    </VStack>
  );
}
