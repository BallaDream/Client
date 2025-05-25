import styled from 'styled-components';

export const Container = styled.section`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  width: 100%;
  padding: 6px 10px;
`;

export const Tab = styled.button<{ $isActive: boolean }>`
  border: none;
  background-color: ${({ $isActive }) => ($isActive ? '#162A6C' : '#a7b2e6')};
  color: ${({ $isActive }) => ($isActive ? 'white' : 'black')};
  cursor: pointer;
  padding: 12px 16px;
  height: 43px;
  box-shadow: ${({ $isActive }) => ($isActive ? '0px 2px 2px rgba(0, 0, 0, 0.2)' : '0px 4px 4px rgba(0, 0, 0, 0.25)')};
  border-radius: 6px;
  font-weight: 500;
  font-size: 18px;
`;

export const ProductList = styled.div`
  display: flex;
  background-color: #f9f9fd;
  box-shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)';

  align-items: center;
  padding: 3px;
  gap: 10px;
  width: 100%;
  height: 374px;

  border-radius: 6px;
  position: relative;
`;
export const ProductListButton = styled.button<{ $enabled: boolean }>`
  position: absolute;
  background-color: transparent;
  cursor: pointer;
  z-index: 9999;
  opacity: ${({ $enabled }) => ($enabled ? 1 : 0.5)};
`;

export const FilterControlContainer = styled.div`
  height: 163px;
  background: #f9f9fd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
`;
export const FilterControlPiceSection = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: black;
  display: grid;
  align-items: center;
  height: 27px;
  display: grid;
  grid-template-columns: minmax(34px, auto) 1fr auto 1fr auto;
  align-items: center;
  gap: 0.5rem;
`;

export const FilterControlDropdownSection = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: auto auto auto;
`;

export const RefreshButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 28px;
  gap: 6px;
  background: #a7b2e6;
  border-radius: 8px;
  color: black;

  svg path {
    fill: black !important;
  }
`;

export const CostInput = styled.input`
  height: 27px;
  left: 6px;
  top: 0px;
  background: #ffffff;
  border-radius: 6px;
  border: 1px;
  width: 100%;
`;

export const DescriptionGrid = styled.div`
  display: grid;
  grid-template-columns: 728fr 325fr;
  gap: 1em;
`;

export const DescriptionContainer = styled.div`
  height: 163px;
  padding: 12px 24px;
  background: #f9f9fd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

export const DescriptionLabel = styled.div`
  display: flex;
  gap: 4px;
  height: 36px;
  align-items: end;
  p:nth-child(1) {
    font-weight: 600;
    font-size: 24px;
    opacity: 1;
  }
  p:nth-child(2) {
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    opacity: 0.7;
  }
`;

export const Card = styled.div`
  width: 260px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Badge = styled.div`
  position: absolute;
  font-size: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  font-size: 12px;
  position: absolute;
  height: 24px;
  left: 0px;
  top: 0px;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 6px 0px;
`;

export const ImageArea = styled.div`
  height: 260px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LikeButton = styled.button<{ $isLiked: boolean }>`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  svg path {
    fill: ${({ $isLiked }) => ($isLiked ? '#eb5757 !important;' : '')};
  }
`;

export const Info = styled.div`
  padding: 10px;
`;

export const ProductName = styled.div`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Price = styled.div`
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 18px;
  opacity: 0.7;
`;

export const Ingredients = styled.div`
  display: flex;
  gap: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const IngredientTag = styled.div`
  padding: 2px 6px;
  background-color: #f0f0f0;
  border-radius: 8px;
  white-space: nowrap;
  font-weight: 500;
  font-size: 12px;
`;
