import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleSalleComponent } from './nouvelle-salle.component';

describe('NouvelleSalleComponent', () => {
  let component: NouvelleSalleComponent;
  let fixture: ComponentFixture<NouvelleSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleSalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
