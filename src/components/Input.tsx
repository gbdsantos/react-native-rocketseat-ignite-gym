import { FormControl, Input as NativeBaseInput, IInputProps } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg="gray.700"
        borderWidth={0}
        color="white"
        _focus={{
          bg: "gray.700",
          borderColor: "green.500",
          borderWidth: 1
        }}
        fontFamily="body"
        fontSize="md"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500"
        }}
        h={14}
        px={4}
        placeholderTextColor="gray.300"
        {...rest}
      />
      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
