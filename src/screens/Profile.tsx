import { Center, ScrollView, VStack } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            alt="Foto do usuário"
            source={{ uri: 'https://github.com/gbdsantos.png' }}
            size={33}
          />
        </Center>

      </ScrollView>
    </VStack>
  );
}
