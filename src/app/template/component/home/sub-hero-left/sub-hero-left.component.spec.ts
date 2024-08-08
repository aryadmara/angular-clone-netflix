import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeroLeftComponent } from './sub-hero-left.component';

describe('SubHeroLeftComponent', () => {
  let component: SubHeroLeftComponent;
  let fixture: ComponentFixture<SubHeroLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubHeroLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHeroLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
