import React from 'react';

import {Button, Vcontainer, Text, FormTextController} from '@/component';
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
import {Schema} from './schema';
import {useSignupHooks} from '../../hooks';
import * as yup from 'yup';

const form = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      cpassword: '',
    },
    resolver: yupResolver(Schema),
  });

  const {handleSignup} = useSignupHooks();
  return (
    <ContainerStyled>
      <FormProvider {...formMethod}>
        <ScrollViewContainer>
          <TextInputContainerStyled>
            <FormTextController
              Label="Email"
              name="email"
              placeholder="Email"
              rules={{
                required: true,
              }}
            />
          </TextInputContainerStyled>
          <TextInputContainerStyled>
            <FormTextController
              Label="Password"
              name="password"
              type="password"
              placeholder="Password"
              rules={{
                required: true,
              }}
            />
          </TextInputContainerStyled>
          <TextInputContainerStyled>
            <FormTextController
              Label="Confirm Password"
              name="cpassword"
              type="password"
              placeholder="Confirm Password"
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
            onPress={formMethod.handleSubmit(handleSignup)}>
            <Text>Register</Text>
          </Button>
        </ButtonContainer>
      </FormProvider>
    </ContainerStyled>
  );
};

export default form;
