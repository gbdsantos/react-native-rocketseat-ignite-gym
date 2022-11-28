import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Exercise } from '@screens/Exercise';
import { History } from '@screens/History';
import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
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
