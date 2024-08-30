import { createAsyncThunk } from '@reduxjs/toolkit';
import { verifyToken } from './verifyfyToken';
import { JwtPayload } from 'jwt-decode';


export const decodeToken = createAsyncThunk<
  JwtPayload | null, 
  string,         
  { rejectValue: string } 
>(
  'user/decodeToken',
  async (token, { rejectWithValue }) => {
    const decodedToken = verifyToken(token);
    
    if (decodedToken) {
      return decodedToken; 
    } else {
      return rejectWithValue('Token is invalid or expired');
    }
  }
);
