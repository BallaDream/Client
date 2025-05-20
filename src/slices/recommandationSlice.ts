import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type TCategory = '색소침착' | '주름' | '모공' | '수분' | '탄력';

interface IProduct {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  tags?: string[];
}

interface IRecommendationState {
  selectedCategory: TCategory;
  priceFilter: { min: number; max: number };
  sortOption: 'priceAsc' | 'priceDesc';
  products: Record<TCategory, IProduct[]>; // 카테고리별 상품 리스트
}

const initialState: IRecommendationState = {
  selectedCategory: '색소침착',
  priceFilter: { min: 0, max: 100000 },
  sortOption: 'priceAsc',
  products: {
    색소침착: [],
    주름: [],
    모공: [],
    수분: [],
    탄력: [],
  },
};

const recommendationSlice = createSlice({
  name: 'recommendation',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<TCategory>) => {
      state.selectedCategory = action.payload;
    },
    setPriceFilter: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.priceFilter = action.payload;
    },
    setSortOption: (state, action: PayloadAction<IRecommendationState['sortOption']>) => {
      state.sortOption = action.payload;
    },
    setProducts: (state, action: PayloadAction<{ category: TCategory; products: IProduct[] }>) => {
      state.products[action.payload.category] = action.payload.products;
    },
  },
});

export const { setCategory, setPriceFilter, setSortOption, setProducts } = recommendationSlice.actions;

export default recommendationSlice.reducer;
