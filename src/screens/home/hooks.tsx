import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps, AppNavigationProps} from '@/navigation/types';
import {useGetNotesQuery,useDeleteNotesMutation} from '@/slice/notes';

export const UseHomeHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>('getNotes');

  const [deleteNotes, {isLoading: deleteloading}] = useDeleteNotesMutation();
  const handleCreateNotes = () => {
    navigation.navigate('Notes');
  };

  const handleDeleteNote=async(id:string)=>{
    try{
      await deleteNotes({
        id,
      }).unwrap()
    }catch(error){
      alert(error);
    }
  }
  return {
    handleCreateNotes,
    isLoading,
    isSuccess,
    isError,
    error,
    notes,
    navigation,
    handleDeleteNote
  };
};
