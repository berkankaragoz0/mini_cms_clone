import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodContentsComponent } from './vod-contents.component';

describe('VodContentsComponent', () => {
  let component: VodContentsComponent;
  let fixture: ComponentFixture<VodContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VodContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VodContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
