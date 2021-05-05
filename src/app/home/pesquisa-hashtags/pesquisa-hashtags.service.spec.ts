import { TestBed } from '@angular/core/testing';

import { PesquisaHashtagsService } from './pesquisa-hashtags.service';

describe('PesquisaHashtagsService', () => {
  let service: PesquisaHashtagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesquisaHashtagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
