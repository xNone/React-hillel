import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeBattle } from '../../api';

export const getRepos = createAsyncThunk(
  'battle/getRepos',
  async ({ playerOneName, playerTwoName }, { rejectWithValue, dispatch }) => {
    try {
      return await makeBattle([playerOneName, playerTwoName]);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
