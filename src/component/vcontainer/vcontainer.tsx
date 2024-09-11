import React from 'react';
import {Container, SafeAreaViewStyled} from './styles';
import type {VContainerProps} from './types';
const VContainerScreen = (props: VContainerProps) => {
  const {children, alignType = 'flex-start',justify='flex-start'} = props;
  return (
    <SafeAreaViewStyled style={{flex:1}}>
      <Container alignType={alignType} justify={justify}>{children}</Container>
    </SafeAreaViewStyled>
  );
};

export default VContainerScreen;
