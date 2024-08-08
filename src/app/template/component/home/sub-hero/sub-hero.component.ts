import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-hero',
  standalone: true,
  imports: [],
  templateUrl: './sub-hero.component.html',
  styleUrl: './sub-hero.component.css',
})
export class SubHeroComponent {
  @Input() images: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
