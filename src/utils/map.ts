const labelKeyMap: Record<string, string> = {
  pigmentation: '색소침착',
  wringkle: '주름',
  dryness: '건조',
  sagging: '처짐',
  pore: '모공',
};

const valueStatusMap: Record<string, string> = {
  Preventive: '예방',
  Recommended: '권고',
  Essential: '필수',
};

// 상태 우선순위 및 색상 매핑
const statusPriority: Array<string> = ['Preventive', 'Recommended', 'Essential'] as const;
const statusColorMap: Record<(typeof statusPriority)[number], string> = {
  Preventive: 'rgba(155, 222, 183, 0.7)',
  Recommended: 'rgba(255, 230, 128, 0.7)',
  Essential: 'rgba(255, 154, 154, 0.7)',
};

// 레이블 매핑
function getLabel(key: string): string {
  return labelKeyMap[key] || key;
}

// 상태 매핑
function getStatus(value: string): string {
  return valueStatusMap[value] || value;
}

// 최악 상태 색상 반환 함수
function getWorstStatusColor(areaStatus: Record<string, string>): string {
  let worstStatus: (typeof statusPriority)[number] = 'Preventive';

  for (const val of Object.values(areaStatus)) {
    const trimmed = val.trim() as (typeof statusPriority)[number];
    if (statusPriority.indexOf(trimmed) > statusPriority.indexOf(worstStatus)) {
      worstStatus = trimmed;
    }
  }

  return statusColorMap[worstStatus];
}

export { getLabel, getStatus, getWorstStatusColor };
