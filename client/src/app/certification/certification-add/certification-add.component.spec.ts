import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationAddComponent } from './certification-add.component';

describe('CertificationAddComponent', () => {
  let component: CertificationAddComponent;
  let fixture: ComponentFixture<CertificationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
