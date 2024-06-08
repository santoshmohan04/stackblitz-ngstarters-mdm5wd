import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { TableapiService } from './tableapi.service';
import { of, throwError } from 'rxjs';

describe('TableapiService', () => {
  let service: TableapiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        TableapiService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });
    service = TestBed.inject(TableapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call productslist api', fakeAsync(() => {
    const mockData = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
    httpClientSpy.get.and.returnValue(of(mockData));

    let products: any[] = [];
    service.getProductsList().subscribe((data) => (products = data));
    tick(); // Simulate asynchronous behavior

    expect(products.length).toBe(2);
    expect(products).toEqual(mockData);
  }));

  it('should handle error from productslist API', fakeAsync(() => {
    const mockError = new HttpErrorResponse({
      status: 404,
      statusText: 'Not Found',
    });
    httpClientSpy.get.and.returnValue(throwError(() => mockError));

    let error: HttpErrorResponse | undefined;
    service.getProductsList().subscribe(
      (data) => {}, // Empty success handler (not used in this test)
      (err) =>
        (error =
          err ??
          new HttpErrorResponse({ status: 0, statusText: 'Unknown Error' }))
    );
    tick(); // Simulate asynchronous behavior

    expect(error).toBeTruthy();
    expect(error?.status).toBe(404);
    expect(error?.statusText).toBe('Not Found');
  }));
});
