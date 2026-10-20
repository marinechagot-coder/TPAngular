import { Component, input, output } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  imports: [],
  selector: 'app-topbar',
  //styleUrl: './topbar.css',
  host: { class: 'app__header topbar', role: 'banner' },
  templateUrl: './topbar.html',
})
export class Topbar {
  readonly user = input.required<Employee>();
  readonly initials = input.required<string>();
  readonly navOpen = input(false);
  readonly menuToggle = output<void>();
  protected readonly appName = 'IndCorp RH';
}
