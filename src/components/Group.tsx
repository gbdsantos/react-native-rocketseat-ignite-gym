import { Pressable, IPressableProps, Text } from 'native-base';

type Props = IPressableProps & {
  name: string;
}

export function Group({ name, ...rest }: Props) {
  return (
    <Pressable
      bg="gray.600"
      alignItems="center"
      justifyContent="center"
      mr={3}
      overflow="hidden"
      rounded="md"
      h={10}
      w={24}
      {...rest}
    >
      <Text
        color="gray.200"
        fontSize="xs"
        fontWeight="bold"
        textTransform="uppercase"
      >
        {name}
      </Text>
    </Pressable>
  );
}
