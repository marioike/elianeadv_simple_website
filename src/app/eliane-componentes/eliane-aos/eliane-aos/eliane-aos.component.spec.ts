import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElianeAosComponent } from './eliane-aos.component';

describe('ElianeAosComponent', () => {
  let component: ElianeAosComponent;
  let fixture: ComponentFixture<ElianeAosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElianeAosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElianeAosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
