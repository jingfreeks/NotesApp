import React from 'react';
import {useGetNotesQuery} from '@/slice/notes';
import {ListItem} from '../index';
const List = (props: {notesId: string}) => {
  const {notesId} = props;
  const {notes} = useGetNotesQuery('getNotes', {
    selectFromResult: ({data}: any) => ({
      notes: data?.entities[notesId],
    }),
  });
  return <ListItem item={notes} />;
};
export default List;
