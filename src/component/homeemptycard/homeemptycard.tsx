import React from 'react';
import {Text,Vcontainer} from '@/component';
import {ImageHeaderStyled} from './styles';
import type {HomeEmptyCardProps} from './types';
const HomeEmptyCardScreen = (props: HomeEmptyCardProps) => {
  const {imgsource, message} = props;
  return (
    <Vcontainer alignType="center">
      <ImageHeaderStyled resizeMode={'contain'} size={150} source={imgsource} />
      <Text TextMode="TextNormal">{message}</Text>
    </Vcontainer>
  );
};
export default HomeEmptyCardScreen;
