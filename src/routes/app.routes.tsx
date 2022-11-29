import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { Exercise } from '@screens/Exercise';
import { History } from '@screens/History';
import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';

type AppRoutes = {
  exercise: undefined;
  history: undefined;
  home: undefined;
  profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen
        component={Home}
        name="home"
      />

      <Screen
        component={History}
        name="history"
      />

      <Screen
        component={Profile}
        name="profile"
      />

      <Screen
        component={Exercise}
        name="exercise"
      />
    </Navigator>
  )
}
