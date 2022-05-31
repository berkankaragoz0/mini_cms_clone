import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseManagamentComponent } from './license-managament.component';

describe('LicenseManagamentComponent', () => {
  let component: LicenseManagamentComponent;
  let fixture: ComponentFixture<LicenseManagamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseManagamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseManagamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
