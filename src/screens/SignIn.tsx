import { Center, Heading, Image, Text, VStack } from 'native-base';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

import BackgroundImg from '@assets/background.png';
import LogoSVG from '@assets/logo.svg';

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700" px={10}>
      <Image
        alt="Pessoas treinando em uma esteira"
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

        <Input
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="E-mail"
        />

        <Input
          placeholder="Senha"
          secureTextEntry
        />

        <Button
          title="Acessar"
        />

        <Button
          title="Criar conta"
          variant="outline"
        />
      </Center>
    </VStack>
  )
}
