import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Employee } from './models/employee';
import { LEAVE_TYPE_LABELS, LeaveRequest } from './models/leave-request';
import { Sidebar } from './layout/sidebar/sidebar';
import { StatCard } from './features/dashboard/stat-card/stat-card';
import { Topbar } from './layout/topbar/topbar';

@Component({
  imports: [RouterOutlet, DatePipe, Sidebar, StatCard, Topbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // Valeurs affichees dans le gabarit avec {{ }}. Elles seront remplacees
  // par les donnees de l'utilisateur connecte lors des seances suivantes.
  protected readonly appName = 'IndCorp RH';
  protected readonly userName = signal('Claude Martinez');

  // Etat d'ouverture de la navigation sur mobile.
  protected readonly navOpen = signal(false);

  protected toggleNav(): void {
    this.navOpen.update((open) => !open);
  }
  //donnee utilisateur
  protected readonly currentUser: Employee = {
    id: 1,
    firstName: 'Claude',
    lastName: 'Martinez',
    email: 'claude.martinez@indcorp.fr',
    jobTitle: 'Responsable Atelier',
    role: 'manager',
    managerId: 4,
    hiredAt: '1990-03-02',
  };
  //leaveRequest:
  protected readonly nextLeave: LeaveRequest = {
    id: 12,
    employeeId: 1,
    type: 'cp',
    startDate: new Date('2026-10-26'),
    endDate: new Date('2026-10-30'),
    status: 'manager-pending',
  };
  protected readonly nextLeaveType = LEAVE_TYPE_LABELS[this.nextLeave.type];
}
