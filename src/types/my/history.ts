import type { STATUS } from '@/enums/enums';

export interface IDiagnosisStatus {
  name: string;
  level: STATUS;
}

export interface IDiagnosisHistoryItem {
  date: string;
  statusList: IDiagnosisStatus[];
}

export type TGetDiagnosisHistoryResponse = IDiagnosisHistoryItem[];
