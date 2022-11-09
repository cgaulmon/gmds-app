import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDeploymentsComponent } from './country-deployments.component';

describe('CountryDeploymentsComponent', () => {
  let component: CountryDeploymentsComponent;
  let fixture: ComponentFixture<CountryDeploymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDeploymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDeploymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
