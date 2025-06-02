import { useState } from 'react';

import FormTypeDropdown from './formTypeDropdown';
import * as S from './recommendationSection.style';

import FilterIcon from '@/assets/icons/filter.svg?react';
import RefeshIcon from '@/assets/icons/refresh.svg?react';
import { setQuery } from '@/slices/recommandationSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export default function FilterControl() {
  const dispatch = useAppDispatch();
  const selectedQuery = useAppSelector((state) => state.recommendation.selectedQuery);

  // 지역 상태로 입력값 관리
  const [minPrice, setMinPrice] = useState<number | undefined>(selectedQuery.minPrice);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(selectedQuery.maxPrice);
  const [formulation, setFormulation] = useState<string | undefined>(selectedQuery.formulation);

  const handleSearch = () => {
    dispatch(
      setQuery({
        ...selectedQuery,
        minPrice,
        maxPrice,
        formulation: formulation === '전체' ? undefined : formulation,
      }),
    );
  };

  const handleRefresh = () => {
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setFormulation(undefined);

    dispatch(
      setQuery({
        ...selectedQuery,
        minPrice: undefined,
        maxPrice: undefined,
        formulation: undefined,
      }),
    );
  };

  return (
    <S.FilterControlContainer>
      <S.FilterControlPiceSection>
        <p>가격</p>
        <S.CostInput type="number" placeholder="최소" value={minPrice ?? ''} onChange={(e) => setMinPrice(Number(e.target.value) || undefined)} />
        <p>~</p>
        <S.CostInput type="number" placeholder="최대" value={maxPrice ?? ''} onChange={(e) => setMaxPrice(Number(e.target.value) || undefined)} />
        <p>원</p>
      </S.FilterControlPiceSection>

      <S.FilterControlDropdownSection>
        <FormTypeDropdown value={formulation} onChange={setFormulation} />
        <S.RefreshButton onClick={handleSearch}>
          <FilterIcon />
        </S.RefreshButton>
        <S.RefreshButton onClick={handleRefresh}>
          <RefeshIcon />
        </S.RefreshButton>
      </S.FilterControlDropdownSection>
    </S.FilterControlContainer>
  );
}
