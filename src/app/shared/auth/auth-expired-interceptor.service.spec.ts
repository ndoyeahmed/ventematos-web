import {TestBed} from '@angular/core/testing';

import {AuthExpiredInterceptorService} from './auth-expired-interceptor.service';

describe('AuthExpiredInterceptorService', () => {
  let service: AuthExpiredInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthExpiredInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
