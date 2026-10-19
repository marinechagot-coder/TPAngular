type Role = 'employee' | 'manager' | 'rh' | 'admin';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  role: Role;
  managerId?: number;
  readonly hiredAt: string;
}
