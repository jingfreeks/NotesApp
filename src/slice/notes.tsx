/* eslint-disable @typescript-eslint/no-explicit-any */
import {createEntityAdapter, EntityId} from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type notesType = {_id: string; title: string;createdAt:any};

export const notesAdapter = createEntityAdapter({
  selectId: (notes: notesType) => notes._id,
  sortComparer: (a, b) => b.createdAt - a.createdAt,
});
export const initialState = notesAdapter.getInitialState();
export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getNotes: builder.query({
      query: () => '/notes',
      transformResponse: responseData => {
        return notesAdapter.setAll(initialState, responseData);
      },
      providesTags: (result: any, error, arg): any =>
        result
          ? [
              {type: 'Notes', id: 'LIST'},
              ...result.ids.map((id: string | number) => ({type: 'Notes', id})),
            ]
          : ['Notes'],
    }),
    addNotes: builder.mutation({
      query: credentials => ({
        url: '/notes',
        method: 'POST',
        body: {...credentials},
      }),
      invalidatesTags: ['Notes'] as any,
    }),
    updateNotes: builder.mutation({
      query: credentials => ({
        url: '/notes',
        method: 'PATCH',
        body: {...credentials},
      }),
      invalidatesTags: ['Notes'] as any,
    }),
    deleteNotes: builder.mutation({
      query: credentials => ({
        url: '/notes',
        method: 'DELETE',
        body: {...credentials},
      }),
      invalidatesTags: ['Notes'] as any,
    }),
  }),
  overrideExisting: true,
});

export const {useGetNotesQuery, useAddNotesMutation, useUpdateNotesMutation,useDeleteNotesMutation} =
  notesApiSlice;
