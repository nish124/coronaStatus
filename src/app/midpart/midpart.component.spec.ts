import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidpartComponent } from './midpart.component';

describe('MidpartComponent', () => {
  let component: MidpartComponent;
  let fixture: ComponentFixture<MidpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
