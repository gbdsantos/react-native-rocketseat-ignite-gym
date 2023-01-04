import { useState } from 'react';
import { FlatList, Heading, HStack, Text, VStack } from 'native-base';

import { ExerciseCard } from '@components/ExerciseCard';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';

export function Home() {
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'ombro']);
  const [groupSelected, setGroupSelected] = useState('costa');

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        _contentContainerStyle={{ px: 8 }}
        data={groups}
        horizontal
        keyExtractor={item => item}
        maxH={10}
        my={10}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            4
          </Text>
        </HStack>

        <ExerciseCard />
      </VStack>
    </VStack>
  );
}
