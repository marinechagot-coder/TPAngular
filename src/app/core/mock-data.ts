import { Employee } from '../models/employee';
import { LeaveRequest } from '../models/leave-request';

// Donnees fictives, remplacees par l'API en seance 7.
export const EMPLOYEES: Employee[] = [
  {
    id: 1,
    firstName: 'Claude',
    lastName: 'Martinez',
    email: 'claude.martinez@indcorp.fr',
    jobTitle: 'Responsable Atelier',
    role: 'manager',
    managerId: 4,
    hiredAt: '1990-03-02',
  },
  {
    id: 2,
    firstName: 'Thomas',
    lastName: 'Roux',
    email: 'thomas.roux@indcorp.fr',
    jobTitle: 'Développeur',
    role: 'employee',
    managerId: 4,
    hiredAt: '2022-09-12',
  },
  {
    id: 3,
    firstName: 'Inès',
    lastName: 'Nasri',
    email: 'ines.nasri@indcorp.fr',
    jobTitle: 'Designer UX',
    role: 'employee',
    managerId: 4,
    hiredAt: '2025-01-06',
  },
  {
    id: 4,
    firstName: 'Julien',
    lastName: 'Dubois',
    email: 'julien.dubois@indcorp.fr',
    jobTitle: 'Responsable technique',
    role: 'manager',
    managerId: 6,
    hiredAt: '2019-05-20',
  },
  {
    id: 5,
    firstName: 'Sarah',
    lastName: 'Petit',
    email: 'sarah.petit@indcorp.fr',
    jobTitle: 'Chargée RH',
    role: 'hr',
    managerId: 6,
    hiredAt: '2021-02-01',
  },
  {
    id: 6,
    firstName: 'Marc',
    lastName: 'Fontaine',
    email: 'marc.fontaine@indcorp.fr',
    jobTitle: 'Directeur général',
    role: 'admin',
    hiredAt: '2015-01-05',
  },
];

export const LEAVE_REQUESTS: LeaveRequest[] = [
  {
    id: 10,
    employeeId: 1,
    type: 'cp',
    startDate: new Date('2026-08-03'),
    endDate: new Date('2026-08-14'),
    status: 'approved',
  },
  {
    id: 11,
    employeeId: 1,
    type: 'rtt',
    startDate: new Date('2026-11-13'),
    endDate: new Date('2026-11-13'),
    status: 'approved',
  },
  {
    id: 12,
    employeeId: 1,
    type: 'cp',
    startDate: new Date('2026-10-26'),
    endDate: new Date('2026-10-30'),
    status: 'manager-pending',
  },
  {
    id: 13,
    employeeId: 2,
    type: 'cp',
    startDate: new Date('2026-12-21'),
    endDate: new Date('2026-12-31'),
    status: 'rh-pending',
  },
];

// Droits annuels de conges payes, en jours ouvres.
export const cp_LEAVE_ALLOWANCE = 25;
