import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElianeHomeComponent } from './eliane-home.component';

describe('ElianeHomeComponent', () => {
  let component: ElianeHomeComponent;
  let fixture: ComponentFixture<ElianeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElianeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElianeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
