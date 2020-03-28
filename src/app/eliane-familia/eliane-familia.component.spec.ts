import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElianeFamiliaComponent } from './eliane-familia.component';

describe('ElianeFamiliaComponent', () => {
  let component: ElianeFamiliaComponent;
  let fixture: ComponentFixture<ElianeFamiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElianeFamiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElianeFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
