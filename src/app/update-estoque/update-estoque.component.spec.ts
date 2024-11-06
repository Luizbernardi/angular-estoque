import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEstoqueComponent } from './update-estoque.component';

describe('UpdateEstoqueComponent', () => {
  let component: UpdateEstoqueComponent;
  let fixture: ComponentFixture<UpdateEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateEstoqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
