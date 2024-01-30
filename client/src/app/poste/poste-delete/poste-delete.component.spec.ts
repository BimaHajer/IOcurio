import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteDeleteComponent } from './poste-delete.component';

describe('PosteDeleteComponent', () => {
  let component: PosteDeleteComponent;
  let fixture: ComponentFixture<PosteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
