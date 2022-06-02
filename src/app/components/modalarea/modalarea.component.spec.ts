import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalareaComponent } from './modalarea.component';

describe('ModalareaComponent', () => {
  let component: ModalareaComponent;
  let fixture: ComponentFixture<ModalareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
