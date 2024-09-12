import React from 'react'
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text
} from 'react-native';
import { Button} from '@/component';
import {verticalScale} from 'react-native-size-matters';
import {
  ContainerStyled,
  KeyboardContainerStyled,
  ButtonContainer,
} from './styles';
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
