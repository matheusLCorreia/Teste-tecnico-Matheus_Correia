import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashMonitoradaComponent } from './hash-monitorada.component';

describe('HashMonitoradaComponent', () => {
  let component: HashMonitoradaComponent;
  let fixture: ComponentFixture<HashMonitoradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashMonitoradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashMonitoradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
