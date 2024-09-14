import React,{useEffect,useState} from 'react';
import {View} from 'react-native';
import {Button, Vcontainer, FormTextController, Text} from '@/component';
import {
  ContainerStyled,
  ScrollViewContainer,
  TextInputContainerStyled,
  ButtonContainer,
} from './styles';
import {
  useForm,
  Controller,
  useFormContext,
  FormProvider,
  SubmitHandler,
} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useAddNotesMutation, useUpdateNotesMutation} from '@/slice/notes';
import Geolocation from '@react-native-community/geolocation';
import {Schema} from './schema';
import * as yup from 'yup';

const form = (props: {
  title: string;
  body: string;
  date: string;
  id: string;
}) => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const {title, body, id} = props;
  const [addNotes, {isLoading}] = useAddNotesMutation();
  const [updateNotes, {isLoading: updateloading}] = useUpdateNotesMutation();
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      title: title || '',
      description: body || '',
    },
    resolver: yupResolver(Schema),
  });

  const [geoInfo,setGeoInfo]=useState<any>()

  useEffect(()=>{
    Geolocation.getCurrentPosition((info:any) => setGeoInfo(info));
  },[])
  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      if (id) {
        await updateNotes({
          title: data.title,
          body: data.description,
          lat: geoInfo?.coords?.latitude,
          long: geoInfo?.coords?.longitude,
           id,
        }).unwrap();
      } else {
        await addNotes({
          title: data.title,
          body: data.description,
          lat: geoInfo?.coords?.latitude,
          long: geoInfo?.coords?.longitude,
        }).unwrap();
      }

      navigation.goBack();
      // dispatch(setCredentials({...userData}));
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <ContainerStyled>
      <FormProvider {...formMethod}>
        <ScrollViewContainer>
          <TextInputContainerStyled>
            <FormTextController
              Label="Title"
              name="title"
              placeholder="Title"
              rules={{
                required: true,
              }}
            />
          </TextInputContainerStyled>
          <TextInputContainerStyled>
            <FormTextController
              Label="Description"
              name="description"
              placeholder="Description"
              rules={{
                required: true,
              }}
            />
          </TextInputContainerStyled>
        </ScrollViewContainer>
        <ButtonContainer>
          <Button
            bcolor="transparent"
            border={1}
            onPress={formMethod.handleSubmit(onSubmit)}>
            <Text TextMode="Title">Save</Text>
          </Button>
        </ButtonContainer>
      </FormProvider>
    </ContainerStyled>
  );
};

export default form;
