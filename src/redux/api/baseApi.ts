import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { toast } from 'sonner';
import { logout, setUser } from '../features/slices/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://assignment-3-beta-tawny.vercel.app/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', ` ${token}`); 
    }
    return headers;
  },
});


const baseQueryFunction: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result: any = await baseQuery(args, api, extraOptions);

  // Handling error status codes
  if (result?.error?.status === 404) {
    toast.error(result.error.data.message || 'Resource not found');
  }
  if (result?.error?.status === 403) {
    toast.error(result.error.data.message || 'Forbidden');
  }

  // Handle token refresh if necessary
  if (result?.data?.accessToken) {
    const user = (api.getState() as RootState).auth.user;
    api.dispatch(
      setUser({
        user,
        token: result.data.accessToken,
      })
    );

    // Retry the original request with the new token
    result = await baseQuery(args, api, extraOptions);
  } else if (result?.error) {
    api.dispatch(logout());
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryFunction,
  tagTypes: [], // Add your tag types here if needed
  endpoints: () => ({}),
});
