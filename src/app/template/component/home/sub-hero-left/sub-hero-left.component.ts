import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-hero-left',
  standalone: true,
  imports: [],
  templateUrl: './sub-hero-left.component.html',
  styleUrl: './sub-hero-left.component.css',
})
export class SubHeroLeftComponent {
  @Input() images: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
