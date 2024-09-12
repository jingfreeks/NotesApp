import React from 'react'
import {View, Text} from 'react-native';
import {Button, Vcontainer,FormTextController} from '@/component';
import {
  ContainerStyled,
  ScrollViewContainer,
  TextInputContainerStyled,
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
import {Schema} from './schema';
import * as yup from 'yup';

const form = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      phoneno: '',
    },
    resolver: yupResolver(Schema),
  });
  return (
    <ContainerStyled>
      <FormProvider {...formMethod}>
        <ScrollViewContainer>
          <TextInputContainerStyled>
          <FormTextController
              Label="Phone no"
              name="phoneno"
              placeholder="Phone no"
              rules={{
                required: true,
              }}
            />
          </TextInputContainerStyled>
        </ScrollViewContainer>
      </FormProvider>
    </ContainerStyled>
  );
};

export default form;
