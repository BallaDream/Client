import { useState } from 'react';

import HistoryCard from '@/components/myPage/historySection/historyCard';
import * as S from '@/components/myPage/historySection/historySection.style';

import FolderIcon from '@/assets/icons/folder_icon.svg?react';
import PaperIcon from '@/assets/icons/paper_icon.svg?react';
import { mockHistoryData } from '@/mock/historyMock';

const ITEMS_PER_PAGE = 6;

export default function HistorySection() {
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = [...mockHistoryData].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
  });

  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);
  const currentItems = sortedData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const latestDate = [...mockHistoryData]
    .map((item) => new Date(item.date))
    .sort((a, b) => b.getTime() - a.getTime())[0]
    .toISOString()
    .split('T')[0];

  return (
    <S.Container>
      <S.PageTitle>
        <FolderIcon />
        추천이력
      </S.PageTitle>

      <S.SummaryBox>
        <PaperIcon />
        <div>
          <p>총 {mockHistoryData.length}회 진단됨</p>
          <span>최근 진단일 {latestDate}</span>
        </div>
      </S.SummaryBox>

      <S.TopRow>
        <S.SortSelect
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value as 'latest' | 'oldest');
            setCurrentPage(1); // 정렬 변경 시 첫 페이지로 이동
          }}
        >
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
        </S.SortSelect>
      </S.TopRow>

      <S.CardList>
        {currentItems.map((item, index) => (
          <HistoryCard key={index} date={item.date} statusList={item.statusList} />
        ))}
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
