import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ImageHeaderStyled, HeaderLeftStyled} from './styles';
import {HomeIcon, HamburgerIcon} from '@/assets';
import {Home, Maps} from '@/screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import type {AppNavigationProps, RootNavigationProps} from './types';
import {colors} from '@/utils/themes';
const Tab = createBottomTabNavigator<RootNavigationProps>();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.black,
      }}>
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <ImageHeaderStyled resizeMode={'contain'} source={HomeIcon} />
          ),
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => (
            <HeaderLeftStyled>
              <ImageHeaderStyled
                resizeMode={'contain'}
                size={25}
                source={HamburgerIcon}
              />
            </HeaderLeftStyled>
          ),
        }}
      />
      <Tab.Screen
        component={Maps}
        name="TimeCard1"
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <FontAwesome color={colors.gray} name={'user-o'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={Profile}
        name="TimeCard1"
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <FontAwesome color={colors.gray} name={'user-o'} size={25} />
          ),
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabScreen;
