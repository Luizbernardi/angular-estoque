import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEstoqueProdutoComponent } from './cadastro-estoque-produto.component';

describe('CadastroEstoqueProdutoComponent', () => {
  let component: CadastroEstoqueProdutoComponent;
  let fixture: ComponentFixture<CadastroEstoqueProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroEstoqueProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroEstoqueProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
