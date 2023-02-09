import { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Center, Skeleton, ScrollView, Text, VStack } from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader'
import { Input } from '@components/Input';
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

          <TouchableOpacity>
            <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input
            bg="gray.600"
            placeholder="Nome"
          />

          <Input
            bg="gray.600"
            isDisabled
            placeholder="E-mail"
          />
        </Center>

      </ScrollView>
    </VStack>
  );
}
