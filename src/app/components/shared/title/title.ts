import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css',
})
export class Title {
  readonly main = input.required<string>();
  readonly sub = input<string>();
  readonly size = input<string>('text-2xl');
  readonly font = input<string>('font-extrabold');
}
