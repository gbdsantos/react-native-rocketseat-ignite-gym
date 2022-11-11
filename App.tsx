import { StatusBar, Text, View } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#202024', justifyContent: 'center' }}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      {fontsLoaded ? <Text> Hello World!</Text> : <View />}
    </View>
  );
}
