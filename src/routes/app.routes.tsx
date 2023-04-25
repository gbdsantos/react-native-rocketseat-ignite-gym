import { Platform } from 'react-native';
import { useTheme } from 'native-base';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { Exercise } from '@screens/Exercise';
import { History } from '@screens/History';
import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';

type AppRoutes = {
  exercise: { exerciseId: string };
  history: undefined;
  home: undefined;
  profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { colors, sizes } = useTheme();

  const iconSize = sizes[6];

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.green[500],
      tabBarInactiveTintColor: colors.gray[200],
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        height: Platform.OS === "android" ? 'auto' : 96,
        paddingBottom: sizes[10],
        paddingTop: sizes[6]
      }
    }}>
      <Screen
        component={Home}
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} height={iconSize} width={iconSize} />
          ),
        }}
      />

      <Screen
        component={History}
        name="history"
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} height={iconSize} width={iconSize} />
          ),
        }}
      />

      <Screen
        component={Profile}
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} height={iconSize} width={iconSize} />
          ),
        }}
      />

      <Screen
        component={Exercise}
        name="exercise"
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}
