import React from 'react';
import {ButtonContainer} from './styles';
import type {ButtonProps} from './types';
// import {colors} from '@/utils/themes';
const Button = (props: ButtonProps) => {
  const {
    children,
    bcolor,
    border,
    onPress,
    padding = 15,
    testId = 'AtomsButtonTestId',
  } = props;
  return (
    <ButtonContainer
      bcolor={bcolor}
      border={border}
      padding={padding}
      onPress={onPress}>
        {children}
    </ButtonContainer>
  );
};
export default Button;
