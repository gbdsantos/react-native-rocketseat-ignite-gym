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

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

export function SignIn() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

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
