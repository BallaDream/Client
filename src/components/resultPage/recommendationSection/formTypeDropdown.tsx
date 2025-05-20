import 'react-dropdown/style.css';

import Dropdown from 'react-dropdown';
import styled from 'styled-components';

const options = ['제형1', '제형2', '제형3', '기타'];

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
    gap: 177px;
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

export default function FormTypeDropdown() {
  return <StyledDropdown options={options} onChange={(option) => console.log(option)} value={options[0]} placeholder="제형을 선택해주세요" />;
}
