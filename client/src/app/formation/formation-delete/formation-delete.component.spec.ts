import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationDeleteComponent } from './formation-delete.component';

describe('FormationDeleteComponent', () => {
  let component: FormationDeleteComponent;
  let fixture: ComponentFixture<FormationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
