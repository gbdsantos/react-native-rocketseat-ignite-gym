import { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Center, Skeleton, ScrollView, Text, VStack, Heading } from 'native-base'
import * as ImagePicker from 'expo-image-picker';

import { Button } from '@components/Button';
import { ScreenHeader } from '@components/ScreenHeader'
import { Input } from '@components/Input';
import { UserPhoto } from '@components/UserPhoto'

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  async function handleUserPhotoSelect() {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true,
    });

    console.log(photoSelected);

    if (photoSelected.canceled) {
      return;
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 36 }}
      >
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

          <TouchableOpacity onPress={handleUserPhotoSelect}>
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

          <Heading alignSelf="flex-start" color="gray.200" fontSize="md" mb={2} mt={12}>
            Alterar senha
          </Heading>

          <Input
            bg="gray.600"
            placeholder="Senha antiga"
            secureTextEntry
          />

          <Input
            bg="gray.600"
            placeholder="Nova senha"
            secureTextEntry
          />

          <Input
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button
            title="Atualizar"
            mt={4}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
