import { STATUS } from '@/enums/enums';

// 라벨 변환
const labelKeyMap: Record<string, string> = {
  pigmentation: '색소침착',
  wringkle: '주름',
  dryness: '건조',
  sagging: '처짐',
  pore: '모공',
};

// 상태 명칭 변환
const valueStatusMap: Record<STATUS, string> = {
  [STATUS.CLEAR]: '예방',
  [STATUS.CAUTION]: '권고',
  [STATUS.WARNING]: '필수',
};

// 상태 우선순위 및 색상
const statusPriority: STATUS[] = [STATUS.CLEAR, STATUS.CAUTION, STATUS.WARNING];

const statusColorMap: Record<STATUS, string> = {
  [STATUS.CLEAR]: 'rgba(155, 222, 183, 0.7)', // 예방
  [STATUS.CAUTION]: 'rgba(255, 230, 128, 0.7)', // 권고
  [STATUS.WARNING]: 'rgba(255, 154, 154, 0.7)', // 필수
};

// 라벨 반환
function getLabel(key: string): string {
  return labelKeyMap[key] || key;
}

// 상태명 반환
function getStatus(value: string): string {
  return valueStatusMap[value as STATUS] || value;
}

// 최악 상태의 색상 반환
function getWorstStatusColor(areaStatus: Record<string, string>): string {
  let worstStatus: STATUS = STATUS.CLEAR;

  for (const val of Object.values(areaStatus)) {
    const trimmed = val.trim() as STATUS;
    if (statusPriority.indexOf(trimmed) > statusPriority.indexOf(worstStatus)) {
      worstStatus = trimmed;
    }
  }

  return statusColorMap[worstStatus];
}

export { getLabel, getStatus, getWorstStatusColor };
