import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      borderWidth={0}
      color="white"
      fontFamily="body"
      fontSize="md"
      marginBottom={4}
      h={14}
      px={4}
      placeholderTextColor="gray.300"
      {...rest}
    />
  );
}
