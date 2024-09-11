import React from 'react'
import { View, Text } from 'react-native'
import {ContainerStyled} from './styles'
const card = (props:{children:React.ReactNode}) => {
  const {children}=props
  return (
    <ContainerStyled> 
      {children}
    </ContainerStyled>
  )
}

export default card