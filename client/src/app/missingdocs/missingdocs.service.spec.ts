import { TestBed, inject } from '@angular/core/testing';

import { MissingDocsService } from './missingdocs.service';

describe('MissingDocsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MissingDocsService]
    });
  });

  it('should be created', inject([MissingDocsService], (service: MissingDocsService) => {
    expect(service).toBeTruthy();
  }));
});