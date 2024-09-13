
import {setCredentials, setLogout} from '../slice/auth';
import Config from 'react-native-config';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.DEV_BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, {getState}: any) => {
    const token = getState().auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithAuth = async (
  args: string,
  api: any,
  extraOptions: string,
) => {
  let result: any = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    const refereshResult = await baseQuery('/refresh', api, extraOptions);

    if (refereshResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({...refereshResult.data, user}));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setLogout());
    }
  }
  return result;
};

export const apiSlice = createApi<any, any>({
  baseQuery: baseQueryWithAuth,
  reducerPath: 'api',
  endpoints: builder => ({}),
  tagTypes: ['Notes', 'Jobs', 'MyJobs', 'JobDetails', 'Profile'] as any,
});
