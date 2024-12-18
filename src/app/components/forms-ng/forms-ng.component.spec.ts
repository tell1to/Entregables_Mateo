import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsNGComponent } from './forms-ng.component';

describe('FormsNGComponent', () => {
  let component: FormsNGComponent;
  let fixture: ComponentFixture<FormsNGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsNGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
