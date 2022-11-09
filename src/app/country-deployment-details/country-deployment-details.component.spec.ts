import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDeploymentDetailsComponent } from './country-deployment-details.component';

describe('CountryDeploymentDetailsComponent', () => {
  let component: CountryDeploymentDetailsComponent;
  let fixture: ComponentFixture<CountryDeploymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDeploymentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDeploymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
