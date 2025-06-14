import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;

  @media (max-width: 1020px) {
    gap: 1em;
  }
`;
