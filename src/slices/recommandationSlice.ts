import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IRecommendationQuery {
  diagnoseType: string;
  level: string;
  step: number;
  minPrice?: number;
  maxPrice?: number;
  formulation?: string;
}

interface IRecommendationState {
  selectedQuery: IRecommendationQuery;
}

const initialState: IRecommendationState = {
  selectedQuery: {
    diagnoseType: 'PIGMENT',
    level: 'CLEAR',
    step: 0,
    minPrice: undefined,
    maxPrice: undefined,
    formulation: undefined,
  },
};
const recommendationSlice = createSlice({
  name: 'recommendation',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<IRecommendationQuery>) => {
      console.log(action.payload);
      state.selectedQuery = action.payload;
    },
  },
});

export const { setQuery } = recommendationSlice.actions;
export default recommendationSlice.reducer;
