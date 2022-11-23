import {
  Button as ButtonNativeBase,
  IButtonProps,
  Text
} from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      bg="green.700"
      _pressed={{
        bg: "green.500"
      }}
      rounded="sm"
      h={14}
      w="full"
      {...rest}
    >
      <Text color="white" fontFamily="heading" fontSize="sm">
        {title}
      </Text>
    </ButtonNativeBase>
  )
}
