import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
`;

export const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const ArrowWrapper = styled.div`
  margin-top: -54px;
  margin-bottom: -82px;
  align-self: center;
  z-index: 2;

  svg {
    width: 62px;
    height: 62px;
    display: block;
  }

  @media (max-width: 768px) {
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;
