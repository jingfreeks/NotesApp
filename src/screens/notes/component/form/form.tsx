import React from 'react';
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
import {useAddNotesMutation} from '@/slice/notes';
import {Schema} from './schema';
import * as yup from 'yup';

const form = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const [addNotes, {isLoading}] = useAddNotesMutation();
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
    },
    resolver: yupResolver(Schema),
  });

  const onSubmit: SubmitHandler<FormData> = async data => {
    // console.log('test')
    try {
      const userData: any = await addNotes({
        title: data.title,
        body: data.description,
        lat: '7.190708',
        long: '125.455338',
      }).unwrap();
      navigation.goBack();
      // dispatch(setCredentials({...userData}));
    } catch (error) {
      console.log('error',error);
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
