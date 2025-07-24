import { LABEL, STATUS } from '@/enums/enums';

// 라벨 변환
const labelKeyMap: Record<LABEL, string> = {
  [LABEL.PIGMENT]: '색소침착',
  [LABEL.WRINKLE]: '주름',
  [LABEL.DRY]: '건조',
  [LABEL.ELASTIC]: '처짐',
  [LABEL.PORE]: '모공',
  [LABEL.ACNE]: '여드름',
};

// 상태 명칭 변환
const valueStatusMap: Record<STATUS, string> = {
  [STATUS.CLEAR]: '예방',
  [STATUS.CAUTION]: '권고',
  [STATUS.WARNING]: '필수',
};

// 상태 우선순위 및 색상
const statusPriority: STATUS[] = [STATUS.CLEAR, STATUS.CAUTION, STATUS.WARNING];

export const statusColorMap: Record<STATUS, string> = {
  [STATUS.CLEAR]: 'rgba(155, 222, 183, 0.7)', // 예방
  [STATUS.CAUTION]: 'rgba(255, 230, 128, 0.7)', // 권고
  [STATUS.WARNING]: 'rgba(255, 154, 154, 0.7)', // 필수
};
// 로그인 방식
export const LOGIN_TYPE_LABELS: Record<string, string> = {
  WEB: '웹',
  KAKAO: '카카오',
};

// 로그인 방식 변환
function getLoginTypeLabel(type: string | null | undefined): string {
  return LOGIN_TYPE_LABELS[type ?? ''] ?? '기타';
}
// 라벨 반환
function getLabel(key: LABEL): string {
  return labelKeyMap[key] || key;
}

// 상태명 반환
function getStatus(value: STATUS): string {
  return valueStatusMap[value as STATUS];
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

export { getLabel, getLoginTypeLabel, getStatus, getWorstStatusColor };
