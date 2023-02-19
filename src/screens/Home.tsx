import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Heading, HStack, Text, VStack } from 'native-base';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { ExerciseCard } from '@components/ExerciseCard';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';

export function Home() {
  const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terra']);
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'ombro']);
  const [groupSelected, setGroupSelected] = useState('costa');

  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigate('exercise');
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        _contentContainerStyle={{ px: 8 }}
        data={groups}
        horizontal
        keyExtractor={item => item}
        maxH={10}
        minH={10}
        my={10}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toUpperCase() === item.toUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontFamily="heading" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          _contentContainerStyle={{ paddingBottom: 20 }}
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ExerciseCard
              onPress={handleOpenExerciseDetails}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </VStack>
    </VStack>
  );
}
