import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteDetailComponent } from './poste-detail.component';

describe('PosteDetailComponent', () => {
  let component: PosteDetailComponent;
  let fixture: ComponentFixture<PosteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
