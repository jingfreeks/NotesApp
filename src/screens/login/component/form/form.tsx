import React from 'react';
import {FormTextController} from '@/component';
import {
  ContainerStyled,
  ScrollViewContainer,
  TextInputContainerStyled,
  ButtonContainer,
} from './styles';
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button, Text} from '@/component';
import {Schema} from './schema';
import {useSignupHooks} from '../../hooks'
import * as yup from 'yup';

const form = () => {
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      email: __DEV__ ? 'lyndell.dobluis@gmail.com' : '',
      password: __DEV__ ? 'Jingfreeks99' :'',
    },
    resolver: yupResolver(Schema),
  });
  const {handleSignIn} = useSignupHooks();
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
        </ScrollViewContainer>
        <ButtonContainer>
          <Button
            bcolor="transparent"
            border={1}
            onPress={formMethod.handleSubmit(handleSignIn)}>
            <Text>Login</Text>
          </Button>
        </ButtonContainer>
      </FormProvider>
    </ContainerStyled>
  );
};

export default form;
