import 'react-dropdown/style.css';

import Dropdown from 'react-dropdown';
import styled from 'styled-components';

import { filterOptions } from '@/constants/filter';

type TProps = {
  value?: string; // 현재 선택된 값
  onChange: (value: string | undefined) => void; // 선택 변경 핸들러
};

const StyledDropdown = styled(Dropdown)`
  .Dropdown-control {
    border: none;
    font-weight: 500;
    box-shadow: none;
    min-width: 180px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2px 12px;
    height: 28px;
    background: #a7b2e6;
    border-radius: 16px;
  }

  .Dropdown-placeholder {
    color: #000;
  }

  .Dropdown-arrow {
    border-color: black transparent black;
  }

  .Dropdown-menu {
    border-radius: 16px;
    padding: 0.5rem 0;
  }

  .Dropdown-option {
    padding: 0.5rem 1rem;
  }

  .Dropdown-option:hover {
    background-color: #a7b2e6;
  }

  .is-selected {
    font-weight: bold;
  }
`;

export default function FormTypeDropdown({ value, onChange }: TProps) {
  return (
    <StyledDropdown
      options={filterOptions}
      value={value ?? ''}
      placeholder="제형을 선택해주세요"
      onChange={(option) => {
        // react-dropdown은 { value, label } 형태로 줌
        onChange(option.value === '기타' ? undefined : option.value);
      }}
    />
  );
}
