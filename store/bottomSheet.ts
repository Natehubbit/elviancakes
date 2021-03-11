import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IBottomSheetState {
  value: string|string[];
  show: boolean;
  header: string;
  options: string[];
  isRadio?: boolean;
  field: string;
  // eslint-disable-next-line no-unused-vars
  onSelect?: (field: string, value: any, shouldValidate?: boolean) => void
}

const initialState: IBottomSheetState = {
  value: '',
  show: false,
  field: '',
  header: '',
  options: [],
  isRadio: false,
};

export const { actions, ...bottomSheetSlice } = createSlice({
  name: 'bottomSheet',
  initialState,
  reducers: {
    open(
      state,
      { payload }: PayloadAction<IBottomSheetState>,
    ) {
      return {
        ...state,
        ...payload,
      };
    },
    close() {
      return initialState;
    },
  },
});

export const bottomSheetActions = {
  ...actions,
};
