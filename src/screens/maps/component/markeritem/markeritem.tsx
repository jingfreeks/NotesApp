
import React from 'react'
import {Marker} from 'react-native-maps';
import type {listItem} from './type';
const MarkItem = (props:listItem) => {
    const {data}=props
  return (
    <Marker
    key={data._id}
    coordinate={{
      latitude: parseInt(data.lat),
      longitude: parseInt(data.long),
    }}
    title={data.title}
    description={data.body}
  />
  )
}

export default MarkItem