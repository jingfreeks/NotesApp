import React from 'react'
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  
} from 'react-native';

import {verticalScale} from 'react-native-size-matters';
import {
  ContainerStyled,
  KeyboardContainerStyled,
  ButtonContainer,
} from './styles';
import {Form, Header} from './component';



const Notes = (props:any) => {
  const {route}=props;
  const {body,title,date,_id}=route?.params || {}

  return (
    <KeyboardContainerStyled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={verticalScale(100)}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerStyled>
          <Header />
          <Form body={body} title={title} date={date} id={_id}/>
        </ContainerStyled>
      </TouchableWithoutFeedback>
    </KeyboardContainerStyled>
  )
}

export default Notes