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

const Notes = () => {
  return (
    <KeyboardContainerStyled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={verticalScale(100)}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerStyled>
          <Header />
          <Form />
          {/* <ButtonContainer>
            <Button bcolor="transparent" border={1} onPress={() => {}}>
              <Text TextMode='Title'>Save</Text>
            </Button>
          </ButtonContainer> */}
        </ContainerStyled>
      </TouchableWithoutFeedback>
    </KeyboardContainerStyled>
  )
}

export default Notes