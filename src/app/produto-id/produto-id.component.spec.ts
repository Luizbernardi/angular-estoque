import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoIdComponent } from './produto-id.component';

describe('ProdutoIdComponent', () => {
  let component: ProdutoIdComponent;
  let fixture: ComponentFixture<ProdutoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
