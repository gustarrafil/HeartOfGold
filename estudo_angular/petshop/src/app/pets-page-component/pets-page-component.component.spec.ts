import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestPageComponentComponent } from './pets-page-component.component';

describe('PestPageComponentComponent', () => {
  let component: PestPageComponentComponent;
  let fixture: ComponentFixture<PestPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PestPageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PestPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
