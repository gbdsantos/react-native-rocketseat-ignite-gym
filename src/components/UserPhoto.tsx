import { Image, IImageProps } from "native-base";

type Props = IImageProps & {
  size: number;
}

export function UserPhoto({ size, ...rest }: IImageProps) {
  return (
    <Image
      borderColor="gray.400"
      borderWidth={2}
      h={size}
      w={size}
      rounded="full"
      {...rest}
    />
  );
}
