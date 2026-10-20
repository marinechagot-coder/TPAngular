import { Component, computed, input } from '@angular/core';
import { LEAVE_TYPE_STATUS, LeaveStatus } from '../../models/leave-request';

//gestion badge à afficher
const BADGE_MODIFIERS: Record<LeaveStatus, string> = {
  'manager-pending': 'badge--pending',
  'rh-pending': 'badge--in-progress',
  approved: 'badge--approved',
  refused: 'badge--rejected',
};

@Component({
  imports: [],
  selector: 'app-status-badge',
  //styleUrl: './status-badge.css',
  template: `<span class="badge" [class]="modifier()">{{ label() }}</span>`,
})
export class StatusBadge {
  readonly status = input.required<LeaveStatus>();
  protected readonly label = computed(() => LEAVE_TYPE_STATUS[this.status()]);
  protected readonly modifier = computed(() => BADGE_MODIFIERS[this.status()]);
}
