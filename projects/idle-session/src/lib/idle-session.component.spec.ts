import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleSessionComponent } from './idle-session.component';

describe('IdleSessionComponent', () => {
  let component: IdleSessionComponent;
  let fixture: ComponentFixture<IdleSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdleSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdleSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
