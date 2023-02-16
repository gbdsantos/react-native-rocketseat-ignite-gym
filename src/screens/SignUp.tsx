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

import { Button } from '@components/Button';
import { Input } from '@components/Input';

import BackgroundImg from '@assets/background.png';
import LogoSVG from '@assets/logo.svg';

export function SignUp() {
  const { control, handleSubmit } = useForm();

  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  function handleSignUp(data: any) {
    console.log(data);
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
          mt={24}
          variant="outline"
        />
      </VStack>
    </ScrollView>
  )
}
