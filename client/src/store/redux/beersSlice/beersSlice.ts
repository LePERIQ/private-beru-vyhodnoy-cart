import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { BeerShopDataType } from '../../../types/beerApiData';
import type { AppThunk } from '../hooks';

// Define the initial state using that type
const initialState: BeerShopDataType = {
  data: {
    draft: [],
    bottles: [],
  },
};

export const shopDataSlice = createSlice({
  name: 'shopData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setShopData: (state, action: PayloadAction<BeerShopDataType>) =>
      action.payload,
  },
});

export const { setShopData } = shopDataSlice.actions;

export const getShopData = (id : number): AppThunk => (dispatch) => {
  // axios<BeerShopDataType>(`http://localhost:3001/api/beerShopData/${id}`)
  axios<BeerShopDataType>(`http://localhost:3001/api/beerShopData/${id}`)
    .then((res) => dispatch(setShopData(res.data)))
    .catch(console.log);
};

export default shopDataSlice.reducer;
