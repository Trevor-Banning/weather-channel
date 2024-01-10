import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalWeatherPageComponent } from './local-weather-page.component';

describe('LocalWeatherPageComponent', () => {
  let component: LocalWeatherPageComponent;
  let fixture: ComponentFixture<LocalWeatherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalWeatherPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalWeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
