import { Component, input, computed } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-stat-card',
  //styleUrl: './stat-card.css',
  host: { class: 'card stat' }, //stat
  templateUrl: './stat-card.html',
})
export class StatCard {
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
  readonly unit = input('');
  readonly hint = input('');
  readonly max = input<number>();

  protected readonly percent = computed(() => {
    const max = this.max();
    const value = Number(this.value());
    if (!max || Number.isNaN(value)) {
      return null;
    }
    // Borne entre 0 et 100 : un solde negatif ne doit pas casser la barre.
    return Math.min(100, Math.max(0, (value / max) * 100));
  });
}
