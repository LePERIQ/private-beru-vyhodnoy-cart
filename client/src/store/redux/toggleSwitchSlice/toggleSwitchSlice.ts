
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SwtitchType } from '../../../types/toggleSwitchType';


// Define the initial state using that type
const initialState: SwtitchType = false;


export const switchStateSlice = createSlice({
  name: 'shopData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSwitchState: (state, action: PayloadAction<SwtitchType>) =>
      action.payload,
  },
});

export const { setSwitchState } = switchStateSlice.actions;



export default switchStateSlice.reducer;
