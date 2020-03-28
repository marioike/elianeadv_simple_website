import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElianeCriminalComponent } from './eliane-criminal.component';

describe('ElianeCriminalComponent', () => {
  let component: ElianeCriminalComponent;
  let fixture: ComponentFixture<ElianeCriminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElianeCriminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElianeCriminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
