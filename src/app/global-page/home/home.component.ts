import { Component } from '@angular/core';
import { HeroComponent } from "../../template/component/home/hero/hero.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { SubHeroComponent } from "../../template/component/home/sub-hero/sub-hero.component";
import { SubHeroLeftComponent } from "../../template/component/home/sub-hero-left/sub-hero-left.component";
import { FAQComponent } from "../../template/component/home/faq/faq.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FooterComponent, SubHeroComponent, SubHeroLeftComponent, FAQComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
