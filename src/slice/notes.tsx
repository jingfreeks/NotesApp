/* eslint-disable @typescript-eslint/no-explicit-any */
import { createEntityAdapter, EntityId } from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type notesType = { _id: string; title: string; }

export const notesAdapter=createEntityAdapter({
    selectId:(notes: notesType)=>notes._id,
    sortComparer:(a,b)=>a.title.localeCompare(b.title)
})
export const initialState = notesAdapter.getInitialState()
export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getNotes: builder.query({  
        query: () => '/notes',
        transformResponse: responseData => {
            return notesAdapter.setAll(initialState, responseData)
        },
        providesTags: (result:any, error, arg):any => 
        result ?
        [
            { type: 'Notes', id: 'LIST' },
            ...result.ids.map((id:string | number) => ({ type: 'Notes', id }))
        ]: ['Notes']
    }),
  }),
  overrideExisting: true,
});

export const {useGetNotesQuery} = notesApiSlice;
