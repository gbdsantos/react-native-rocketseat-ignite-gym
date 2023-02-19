import { Heading, SectionList, Text, VStack } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';
import { useState } from 'react';

export function History() {
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
