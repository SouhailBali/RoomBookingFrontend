import { TestBed } from '@angular/core/testing';

import { ImagesPushService } from './images-push.service';

describe('ImagesPushService', () => {
  let service: ImagesPushService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesPushService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
