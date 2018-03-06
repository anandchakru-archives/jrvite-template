import { TestBed, inject } from '@angular/core/testing';

import { BsEventsService } from './bs-events.service';

describe('BsEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BsEventsService]
    });
  });

  it('should be created', inject([BsEventsService], (service: BsEventsService) => {
    expect(service).toBeTruthy();
  }));
});
