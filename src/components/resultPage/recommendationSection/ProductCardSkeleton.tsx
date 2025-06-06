import 'react-loading-skeleton/dist/skeleton.css';

import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

const SkeletonWrapper = styled.div`
  width: 260px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default function ProductCardSkeleton() {
  return (
    <SkeletonWrapper>
      <Skeleton height={260} />
      <div style={{ padding: '10px' }}>
        <Skeleton height={20} width={`80%`} />
        <Skeleton height={18} width={`60%`} style={{ marginTop: '6px' }} />
        <Skeleton height={24} width={`90%`} style={{ marginTop: '10px' }} />
      </div>
    </SkeletonWrapper>
  );
}
