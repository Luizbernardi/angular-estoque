import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEstoqueProdutoComponent } from './update-estoque-produto.component';

describe('UpdateEstoqueProdutoComponent', () => {
  let component: UpdateEstoqueProdutoComponent;
  let fixture: ComponentFixture<UpdateEstoqueProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateEstoqueProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEstoqueProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
