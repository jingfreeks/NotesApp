import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';

export const useWelcomeHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleLogin=()=>{
    navigation.navigate('Login')
  }
  return {
    handleSignup,
    handleLogin
  };
};
