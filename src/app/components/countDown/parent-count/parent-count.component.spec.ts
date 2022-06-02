import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCountComponent } from './parent-count.component';

describe('ParentCountComponent', () => {
  let component: ParentCountComponent;
  let fixture: ComponentFixture<ParentCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
