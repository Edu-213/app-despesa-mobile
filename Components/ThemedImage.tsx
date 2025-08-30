import { Image, ImageProps, useColorScheme } from 'react-native';

type ThemedImageProps = ImageProps & {
  lightSource: any;
  darkSource: any;
};

export function ThemedImage({ lightSource, darkSource, ...props }: ThemedImageProps) {
  const theme = useColorScheme() ?? 'light';; // 'light' ou 'dark'
  const source = theme === 'dark' ? darkSource : lightSource;
  return <Image source={source} {...props} />;
}
