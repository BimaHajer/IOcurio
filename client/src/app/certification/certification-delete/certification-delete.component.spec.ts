import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationDeleteComponent } from './certification-delete.component';

describe('CertificationDeleteComponent', () => {
  let component: CertificationDeleteComponent;
  let fixture: ComponentFixture<CertificationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
