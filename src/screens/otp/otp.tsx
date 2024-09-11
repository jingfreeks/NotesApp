import React, {useRef, useState} from 'react';
import {Platform} from 'react-native'
import {Button, Text} from '@/component';
import {ContainerStyled, ButtonContainerStyled,KeyboardContainerStyled} from './styles';
import OtpView from 'react-native-otp-textinput';
import {verticalScale} from 'react-native-size-matters';

const Otp = () => {
  const otpInput = useRef<OtpView>(null);
  const [otpinput, setOtpInput] = useState<string>('');
  return (
    <KeyboardContainerStyled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={verticalScale(100)}>
      <ContainerStyled>
        <OtpView
          ref={otpInput}
          inputCount={6}
          keyboardType="numeric"
          handleTextChange={setOtpInput}
          textInputStyle={{borderRadius: 10, borderWidth: 4, padding: 10}}
        />
        <ButtonContainerStyled>
          <Button bcolor="transparent" border={1} onPress={() => {}}>
            <Text>Submit</Text>
          </Button>
        </ButtonContainerStyled>
        <ButtonContainerStyled>
          <Button bcolor="transparent" border={1} onPress={() => {}}>
            <Text>Clear</Text>
          </Button>
        </ButtonContainerStyled>
      </ContainerStyled>
    </KeyboardContainerStyled>
  );
};

export default Otp;
