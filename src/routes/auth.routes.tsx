import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen
        component={SignIn}
        name="signIn"
      />

      <Screen
        component={SignUp}
        name="signUp"
      />
    </Navigator>
  )
}
