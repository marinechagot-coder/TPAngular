type LeaveType = 'cp' | 'rtt' | 'arret' | 'ss';
type LeaveStatus = 'manager-pending' | 'rh-pending' | 'approved' | 'refused';

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
