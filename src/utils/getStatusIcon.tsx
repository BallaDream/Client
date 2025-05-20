import { AlertOctagon, AlertTriangle, CheckCircle } from 'lucide-react';

export function getStatusIcon(value: string) {
  switch (value) {
    case 'Preventive':
      return <CheckCircle size={16} color="#4ade80" strokeWidth={4} />; // green
    case 'Recommended':
      return <AlertTriangle size={16} color="#facc15" strokeWidth={4} />; // yellow
    case 'Essential':
      return <AlertOctagon size={16} color="#f87171" strokeWidth={4} />; // red
    default:
      return null;
  }
}
