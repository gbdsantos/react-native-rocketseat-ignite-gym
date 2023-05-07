import { useState } from 'react'
import { Alert, TouchableOpacity } from 'react-native';
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  useToast,
  VStack
} from 'native-base'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import * as yup from 'yup';

import { Button } from '@components/Button';
import { ScreenHeader } from '@components/ScreenHeader';
import { Input } from '@components/Input';
import { UserPhoto } from '@components/UserPhoto';

import { api } from '@services/api';
import { useAuth } from '@hooks/useAuth';
import { AppError } from '@utils/AppError';

const PHOTO_SIZE = 33;

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  old_password: string;
  confirm_password: string;
}

const profileSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 dígitos.').nullable().transform((value) => !!value ? value : null),
  confirm_password: yup
    .string()
    .nullable()
    .transform((value) => !!value ? value : null)
    .oneOf([yup.ref('password'), null], 'A confirmação de senha não confere.')
    .when('password', {
      is: (Field: any) => Field,
      then: (schema) => yup.string().nullable().required('Informe a confirmação da senha').transform((value) => !!value ? value : null)
    })
});

export function Profile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState('https://github.com/gbdsantos.png')

  const { user, updateUserProfile } = useAuth();
  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm<FormDataProps>({
    defaultValues: {
      name: user.name,
      email: user.email
    },
    resolver: yupResolver(profileSchema)
  });
  const toast = useToast();

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true);

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri)

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            bgColor: 'red.500',
            placement: 'top',
            title: 'Essa imagem é muito grande. Escolha uma imagem de até 5MB.',
          });
        }

        const fileExtension = photoSelected.assets[0].uri.split('.').pop();

        const photoFile = {
          name: `${user.name}.${fileExtension}`.toLowerCase(),
          type: `${photoSelected.assets[0].type}/${fileExtension}`,
          uri: photoSelected.assets[0].uri
        }

        console.log(photoFile);
      }

    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

  async function handleProfileUpdate(data: FormDataProps) {
    try {
      setIsUpdating(true);

      const userUpdated = user;
      userUpdated.name = data.name;

      await api.put('/users', data);

      await updateUserProfile(userUpdated);

      toast.show({
        bgColor: 'green.500',
        placement: 'top',
        title: 'Perfil atualizado com sucesso!'
      });

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível atualizar os dados. Tente novamente mais tarde';

      toast.show({
        bgColor: 'red.500',
        placement: 'top',
        title
      });
    } finally {
      setIsUpdating(false);
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
                source={{ uri: userPhoto }}
                size={PHOTO_SIZE}
              />
          }

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <Input
                bg="gray.600"
                errorMessage={errors.name?.message}
                onChangeText={onChange}
                placeholder="Nome"
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <Input
                bg="gray.600"
                isDisabled
                onChange={onChange}
                placeholder="E-mail"
                value={value}
              />
            )}
          />

          <Heading alignSelf="flex-start" color="gray.200" fontFamily="heading" fontSize="md" mb={2} mt={12}>
            Alterar senha
          </Heading>

          <Controller
            control={control}
            name="old_password"
            render={({ field: { onChange } }) => (
              <Input
                bg="gray.600"
                onChangeText={onChange}
                placeholder="Senha antiga"
                secureTextEntry
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                bg="gray.600"
                errorMessage={errors.password?.message}
                onChangeText={onChange}
                placeholder="Nova senha"
                secureTextEntry
              />
            )}
          />

          <Controller
            control={control}
            name="confirm_password"
            render={({ field: { onChange } }) => (
              <Input
                bg="gray.600"
                errorMessage={errors.confirm_password?.message}
                onChangeText={onChange}
                placeholder="Confirme a nova senha"
                secureTextEntry
              />
            )}
          />

          <Button
            isLoading={isUpdating}
            mt={4}
            onPress={handleSubmit(handleProfileUpdate)}
            title="Atualizar"
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
