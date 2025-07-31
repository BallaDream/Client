import type { STATUS } from '@/enums/enums';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface DiagnosisStatus {
  name: string;
  level: STATUS;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface DiagnosisHistoryItem {
  date: string;
  statusList: DiagnosisStatus[];
}

export type TGetDiagnosisHistoryResponse = DiagnosisHistoryItem[];
