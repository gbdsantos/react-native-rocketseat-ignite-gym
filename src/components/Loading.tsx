import { Center, Spinner } from 'native-base';

export function Loading() {
  return (
    <Center flex={1} bg="pink.700">
      <Spinner />
    </Center>
  )
}
