import React from 'react';
import {View} from 'react-native';
import {Card, Text, Button} from '@/component';
import type {listItem} from './type';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '@/utils/themes';
import {
  ContainerStyled,
  CardContentStyled,
  CardContainerStyled,
  CardActionContainerStyled,
  TitleTextStyled,
} from './styles';
import {UseHomeHooks} from '../../hooks';
const listitem = (props: listItem) => {
  const {title, body, date, _id} = props?.item;
  const {navigation, handleDeleteNote} = UseHomeHooks();
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
            <Button
              bcolor="transparent"
              border={0}
              onPress={() => navigation.navigate('Notes', props?.item)}>
              <FontAwesome color={colors.gray} name={'pencil'} size={25} />
            </Button>
            <Button
              bcolor="transparent"
              border={1}
              onPress={() => handleDeleteNote(_id)}>
              <FontAwesome color={colors.gray} name={'trash-o'} size={25} />
            </Button>
          </CardActionContainerStyled>
        </CardContainerStyled>
        <CardContentStyled>
          <Ionicons name={'location-sharp'} size={25} color={colors.black} onPress={() => navigation.navigate('NotesMap', props?.item)}/>
        </CardContentStyled>
      </Card>
    </ContainerStyled>
  );
};

export default listitem;
