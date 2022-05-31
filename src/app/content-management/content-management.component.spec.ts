import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentManagamentComponent } from './content-management.component';

describe('ContentManagamentComponent', () => {
  let component: ContentManagamentComponent;
  let fixture: ComponentFixture<ContentManagamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentManagamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentManagamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
