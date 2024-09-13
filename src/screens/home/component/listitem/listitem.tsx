import React from 'react';
import {View} from 'react-native';
import {Card, Text, Button} from '@/component';
import type {listItem} from './type';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '@/utils/themes';
import {
  ContainerStyled,
  CardContentStyled,
  CardContainerStyled,
  CardActionContainerStyled,
  TitleTextStyled,
} from './styles';

const listitem = (props: listItem) => {
  const {title, body, date} = props?.item;
  return (
    <ContainerStyled>
      <Card>
        <TitleTextStyled>
          <Text TextMode="Htitle">{title}</Text>
        </TitleTextStyled>
        <CardContainerStyled>
          <CardContentStyled>
            <Text>{body}</Text>
            <Text>{date}</Text>
          </CardContentStyled>
          <CardActionContainerStyled>
            <Button bcolor="transparent" border={0} onPress={() => {}}>
              <FontAwesome color={colors.gray} name={'pencil'} size={25} />
            </Button>
            <Button bcolor="transparent" border={1} onPress={() => {}}>
              <FontAwesome color={colors.gray} name={'trash-o'} size={25} />
            </Button>
          </CardActionContainerStyled>
        </CardContainerStyled>
      </Card>
    </ContainerStyled>
  );
};

export default listitem;
