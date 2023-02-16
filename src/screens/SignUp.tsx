import { useState } from 'react';
import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack
} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

import BackgroundImg from '@assets/background.png';
import LogoSVG from '@assets/logo.svg';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  function handleSignUp() {
    console.log({
      name,
      email,
      password,
      passwordConfirm
    });
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

          <Input
            onChangeText={setName}
            placeholder="Nome"
          />

          <Input
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="E-mail"
          />

          <Input
            onChangeText={setPassword}
            placeholder="Senha"
            secureTextEntry
          />

          <Input
            onChangeText={setPasswordConfirm}
            placeholder="Confirme a Senha"
            secureTextEntry
          />

          <Button
            onPress={handleSignUp}
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
