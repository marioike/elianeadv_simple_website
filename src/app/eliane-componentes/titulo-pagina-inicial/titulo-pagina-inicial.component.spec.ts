import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPaginaInicialComponent } from './titulo-pagina-inicial.component';

describe('TituloPaginaInicialComponent', () => {
  let component: TituloPaginaInicialComponent;
  let fixture: ComponentFixture<TituloPaginaInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloPaginaInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloPaginaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
