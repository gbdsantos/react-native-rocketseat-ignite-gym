import { Pressable, IPressableProps, Text } from 'native-base';

type Props = IPressableProps & {
  name: string;
  isActive: boolean;
}

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      bg="gray.600"
      alignItems="center"
      isPressed={isActive}
      justifyContent="center"
      mr={3}
      overflow="hidden"
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1,
      }}
      rounded="md"
      h={10}
      w={24}
      {...rest}
    >
      <Text
        color={isActive ? "green.500" : "gray.200"}
        fontSize="xs"
        fontWeight="bold"
        textTransform="uppercase"
      >
        {name}
      </Text>
    </Pressable>
  );
}
