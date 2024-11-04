import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoEstoqueListComponent } from './produto-estoque-list.component';

describe('ProdutoEstoqueListComponent', () => {
  let component: ProdutoEstoqueListComponent;
  let fixture: ComponentFixture<ProdutoEstoqueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoEstoqueListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutoEstoqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
