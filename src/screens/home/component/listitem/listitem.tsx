import React from 'react'
import { View, Text } from 'react-native'
import type {listItem} from './type'

const listitem = (props:listItem) => {
    const {title,body,date}=props
  return (
    <View>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{date}</Text>
    </View>
  )
}

export default listitem
