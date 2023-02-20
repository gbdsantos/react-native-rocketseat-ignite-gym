import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

import BackgroundImg from '@assets/background.png';
import LogoSVG from '@assets/logo.svg';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = Yup.object({
  name: Yup.string().required('Informe o nome.'),
  email: Yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
  password: Yup.string().required('Informe a senha.').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  password_confirm: Yup.string().required('Confirme a senha.').oneOf([Yup.ref('password')], 'A confirmação da senha não confere.').min(6, 'A senha deve ter pelo menos 6 dígitos.')
});

export function SignUp() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  const defaultValues = {
    email: '',
    password: ''
  }

  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  async function handleSignUp(data: FormDataProps) {
    console.log(data);

    const response = await fetch('http://192.168.1.11:3333/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const apiData = await response.json();
    console.log(apiData);

    reset(defaultValues);
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
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
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
                onChangeText={onChange}
                placeholder="Senha"
                secureTextEntry
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                errorMessage={errors.password_confirm?.message}
                onChangeText={onChange}
                onSubmitEditing={handleSubmit(handleSignUp)}
                placeholder="Confirme a Senha"
                returnKeyType="send"
                secureTextEntry
                value={value}
              />
            )}
          />

          <Button
            onPress={handleSubmit(handleSignUp)}
            title="Criar e acessar"
          />
        </Center>

        <Button
          onPress={handleGoBack}
          title="Voltar para o login"
          mt={12}
          variant="outline"
        />
      </VStack>
    </ScrollView>
  )
}
