import {
  View,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {ContainerStyled, KeyboardContainerStyled} from './styles';
import {Form, Header} from './component';
const Signup = () => {
  return (
    <KeyboardContainerStyled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={verticalScale(100)}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerStyled>
          <Header />
          <Form />
        </ContainerStyled>
      </TouchableWithoutFeedback>
    </KeyboardContainerStyled>
  );
};

export default Signup;
