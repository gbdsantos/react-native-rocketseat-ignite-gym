import { Heading, HStack, VStack, Text } from 'native-base';

export function HomeHeader() {
  return (
    <HStack alignItems="center" bg="gray.600" pb={5} pt={16} px={8}>
      <VStack>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md">
          Guilherme
        </Heading>
      </VStack>
    </HStack>
  )
}
