import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueIdComponent } from './estoque-id.component';

describe('EstoqueIdComponent', () => {
  let component: EstoqueIdComponent;
  let fixture: ComponentFixture<EstoqueIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstoqueIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstoqueIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
