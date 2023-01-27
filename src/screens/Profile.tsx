import { useState } from 'react'
import { Center, Skeleton, ScrollView, VStack } from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          {
            photoIsLoading ?
              <Skeleton
                h={PHOTO_SIZE}
                w={PHOTO_SIZE}
                rounded="full"
                startColor="gray.500"
                endColor="gray.400"
              /> :
              <UserPhoto
                alt="Foto do usuário"
                source={{ uri: 'https://github.com/gbdsantos.png' }}
                size={PHOTO_SIZE}
              />
          }
        </Center>

      </ScrollView>
    </VStack>
  );
}
