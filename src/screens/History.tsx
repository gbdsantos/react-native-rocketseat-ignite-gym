import { Heading, SectionList, VStack } from 'native-base';

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
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )
        }
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        sections={exercises}
        px={8}
      />


    </VStack>
  );
}
