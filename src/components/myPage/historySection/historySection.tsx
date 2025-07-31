// components/myPage/historySection/HistorySection.tsx
import { useState } from 'react';

import { useDiagnosisHistory } from '@/hooks/useDiagnosisHistory';

import HistoryCard from '@/components/myPage/historySection/historyCard';
import * as S from '@/components/myPage/historySection/historySection.style';

import FolderIcon from '@/assets/icons/folder_icon.svg?react';
import PaperIcon from '@/assets/icons/paper_icon.svg?react';

const ITEMS_PER_PAGE = 6;

export default function HistorySection() {
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');
  const [currentPage, setCurrentPage] = useState(1);

  const isLatest = sortOrder === 'latest';
  const { data, isLoading } = useDiagnosisHistory(currentPage - 1, isLatest);

  const historyList = Array.isArray(data?.list) ? data.list : [];
  const totalCount = data?.totalCount || 0;

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const latestDate = historyList[0]?.diagnoseDate ?? '-';

  if (isLoading) return <S.Container>불러오는 중...</S.Container>;

  if (totalCount === 0) {
    return (
      <S.Container>
        <S.PageTitle>
          <FolderIcon />
          추천이력
        </S.PageTitle>

        <S.SummaryBox>
          <PaperIcon />
          <div>
            <p>총 0회 진단됨</p>
            <span>최근 진단일 -</span>
          </div>
        </S.SummaryBox>

        <S.EmptyMessage>
          💡 진단 이력이 아직 없습니다.
          <br />
          피부 분석을 통해 나에게 꼭 맞는 제품을 찾아보세요!
        </S.EmptyMessage>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.PageTitle>
        <FolderIcon />
        추천이력
      </S.PageTitle>

      <S.SummaryBox>
        <PaperIcon />
        <div>
          <p>총 {totalCount}회 진단됨</p>
          <span>최근 진단일 {latestDate}</span>
        </div>
      </S.SummaryBox>

      <S.TopRow>
        <S.SortSelect
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value as 'latest' | 'oldest');
            setCurrentPage(1); // 정렬 변경 시 페이지 초기화
          }}
        >
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
        </S.SortSelect>
      </S.TopRow>

      <S.CardList>
        {historyList.map((item, index) => {
          const result = item.diagnoseResult;
          const statusList =
            result?.skinStatusList ??
            Object.entries(result || {}).map(([key, value]) => ({
              name: convertSkinKeyToName(key),
              level: convertLevelToKor(value),
            }));

          return <HistoryCard key={index} date={item.diagnoseDate} statusList={statusList} diagnoseId={item.diagnoseId} />;
        })}
      </S.CardList>

      <S.Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <S.PageButton key={i} $active={currentPage === i + 1} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </S.PageButton>
        ))}
      </S.Pagination>
    </S.Container>
  );
}

function convertSkinKeyToName(key: string): string {
  const map: Record<string, string> = {
    WRINKLE: '주름',
    DRY: '수분',
    PIGMENT: '색소침착',
    ELASTIC: '탄력',
    PORE: '모공',
  };
  return map[key] || key;
}

function convertLevelToKor(value: string): '예방' | '권고' | '필수' {
  if (value === '예방' || value === '권고' || value === '필수') return value;

  const map: Record<string, '예방' | '권고' | '필수'> = {
    CLEAR: '예방',
    WARNING: '권고',
    CAUTION: '권고',
    DANGER: '필수',
    REQUIRED: '필수',
  };

  return map[value] || '예방';
}
