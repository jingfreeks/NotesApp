import {apiSlice} from '@/config/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/auth',
        method: 'POST',
        body: {...credentials},
      }),
    }),
    flogin: builder.mutation({
      query: credentials => ({
        url: '/auth/flogin',
        method: 'POST',
        body: {...credentials},
      }),
    }),
    logout: builder.mutation({
      query: credentials => ({
        url: '/logout',
        method: 'POST',
        // body: {...credentials},
      }),
    }),
    fsignup: builder.mutation({
      query: credentials => ({
        url: '/fsignup',
        method: 'POST',
        body: {...credentials},
      }),
    }),
    signup: builder.mutation({
      query: credentials => ({
        url: '/signup',
        method: 'POST',
        body: {...credentials},
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useLoginMutation,useSignupMutation,useLogoutMutation,useFloginMutation,useFsignupMutation} = authApiSlice || {};
