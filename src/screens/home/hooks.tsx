import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps, AppNavigationProps} from '@/navigation/types';
import {useGetNotesQuery} from '@/slice/notes';

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
  const handleCreateNotes = () => {
    navigation.navigate('Notes');
  };
  return {
    handleCreateNotes,
    isLoading,
    isSuccess,
    isError,
    error,
    notes
  };
};
