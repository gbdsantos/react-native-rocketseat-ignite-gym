import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  useToast,
  VStack
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { useAuth } from '@hooks/useAuth';

import BackgroundImg from '@assets/background.png';
import LogoSVG from '@assets/logo.svg';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import { AppError } from '@utils/AppError';

type FormDataProps = {
  email: string;
  password: string;
}

const signInSchema = Yup.object({
  email: Yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
  password: Yup.string().required('Informe a senha.')
});

export function SignIn() {
  const { signIn } = useAuth();

  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const toast = useToast();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema)
  });

  const defaultValues = {
    email: '',
    password: ''
  }

  async function handleAutentication({ email, password }: FormDataProps) {
    try {
      await signIn(email, password);
      reset(defaultValues);

    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde.';
      toast.show({
        bgColor: 'red.500',
        placement: 'top',
        title,
      })
    }
  }

  function handleNewAccount() {
    navigate('signUp');
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          alt="Pessoas treinando em uma esteira"
          defaultSource={BackgroundImg}
          position="absolute"
          resizeMode="contain"
          source={BackgroundImg}
        />

        <Center my={24}>
          <LogoSVG />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading
            color="gray.100"
            fontFamily="heading"
            fontSize="xl"
            mb={6}
          >
            Acesse sua conta
          </Heading>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                autoCapitalize="none"
                errorMessage={errors.email?.message}
                keyboardType="email-address"
                onChangeText={onChange}
                placeholder="E-mail"
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                errorMessage={errors.password?.message}
                placeholder="Senha"
                onChangeText={onChange}
                secureTextEntry
                value={value}
              />
            )}
          />

          <Button
            title="Acessar"
            onPress={handleSubmit(handleAutentication)}
          />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontFamily="body" fontSize="sm" mb={3}>
            Ainda não tem acesso?
          </Text>

          <Button
            onPress={handleNewAccount}
            title="Criar conta"
            variant="outline"
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
