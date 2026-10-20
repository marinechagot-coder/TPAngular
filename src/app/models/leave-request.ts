export type LeaveType = 'cp' | 'rtt' | 'arret' | 'ss';
export type LeaveStatus = 'manager-pending' | 'rh-pending' | 'approved' | 'refused';

export interface LeaveRequest {
  id: number;
  employeeId: number;
  type: LeaveType;
  startDate: Date;
  endDate: Date;
  reason?: string;
  status: LeaveStatus;
}
export const LEAVE_TYPE_LABELS: Record<LeaveType, string> = {
  cp: 'Congés payés',
  rtt: 'RTT',
  arret: 'Maladie',
  ss: 'Sans solde',
};
export const LEAVE_TYPE_STATUS: Record<LeaveStatus, string> = {
  'manager-pending': 'Attente validation manager',
  'rh-pending': 'Attente validation rh',
  approved: 'Validé',
  refused: 'Rejeté',
};
