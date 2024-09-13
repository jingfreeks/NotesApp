import { View, Text } from 'react-native'
import React from 'react'
import {useGetNotesQuery} from '@/slice/notes';
import {Markitem} from '../index';

const List = (props:{item:string}) => {
  const {item}=props

  const {notes} = useGetNotesQuery('getNotes', {
    selectFromResult: ({data}: any) => ({
      notes: data?.entities[item],
    }),
  });
  console.log('notesss',notes)
  return (
    <Markitem data={notes} />
  )
}

export default List