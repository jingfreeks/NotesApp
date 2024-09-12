import React, {useEffect,useState} from 'react';
import {Platform, TouchableWithoutFeedback, Keyboard, Text} from 'react-native';
import {Button} from '@/component';
import {verticalScale} from 'react-native-size-matters';
import {
  ContainerStyled,
  KeyboardContainerStyled,
  ButtonContainer,
} from './styles';
import {Form, Header} from './component';
import {useSignupHooks} from './hooks';

const Login = () => {
  const {signInWithPhoneNumber} = useSignupHooks();
  const [phoneNo,setPhoneNo]=useState('+639912141979')
  return (
    <KeyboardContainerStyled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={verticalScale(100)}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerStyled>
          <Header />
          <Form />
          <ButtonContainer>
            <Button bcolor="transparent" border={1} onPress={()=>signInWithPhoneNumber(phoneNo)}>
              <Text>Login</Text>
            </Button>
          </ButtonContainer>
        </ContainerStyled>
      </TouchableWithoutFeedback>
    </KeyboardContainerStyled>
  );
};

export default Login;
