import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationUpdatrComponent } from './certification-updatr.component';

describe('CertificationUpdatrComponent', () => {
  let component: CertificationUpdatrComponent;
  let fixture: ComponentFixture<CertificationUpdatrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationUpdatrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationUpdatrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
