import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaHashtagsComponent } from './pesquisa-hashtags.component';

describe('PesquisaHashtagsComponent', () => {
  let component: PesquisaHashtagsComponent;
  let fixture: ComponentFixture<PesquisaHashtagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaHashtagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaHashtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
