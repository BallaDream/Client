import { AlertOctagon, AlertTriangle, CheckCircle } from 'lucide-react';

import { STATUS } from '@/enums/enums';

export function getStatusIcon(value: string) {
  switch (value) {
    case STATUS.CLEAR:
      return <CheckCircle size={16} color="#4ade80" strokeWidth={4} />; // green
    case STATUS.CAUTION:
      return <AlertTriangle size={16} color="#facc15" strokeWidth={4} />; // yellow
    case STATUS.WARNING:
      return <AlertOctagon size={16} color="#f87171" strokeWidth={4} />; // red
    default:
      return null;
  }
}
