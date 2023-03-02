import { StatusBar, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';
import { SignUp } from '@screens/SignUp';

import { AuthContext } from '@contexts/AuthContext';

import { Routes } from './src/routes';
import { THEME } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <AuthContext.Provider value={{
        user: {
          id: '1',
          name: 'Guilherme',
          email: 'guilherme@email.com',
          avatar: 'guilherme.png'
        }
      }}>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </NativeBaseProvider>
  );
}
