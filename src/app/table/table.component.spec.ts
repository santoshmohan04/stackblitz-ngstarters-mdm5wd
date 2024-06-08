import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { TableComponent } from './table.component';
import { TableapiService } from './tableapi.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let tableapiService: jasmine.SpyObj<TableapiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent, HttpClientModule],
      providers: [
        {
          provide: TableapiService,
          useValue: jasmine.createSpyObj('TableapiService', [
            'getProductsList',
          ]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    tableapiService = TestBed.inject(
      TableapiService
    ) as jasmine.SpyObj<TableapiService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain empty product_details', () => {
    expect(component.product_details.length).toEqual(0);
  });

  it('should display products on successful API call', fakeAsync(() => {
    const mockData = [
      {
        id: 1,
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'Premium headphones with active noise-cancellation.',
        price: 249.99,
        image: 'https://fakeimg.pl/500x500/ff6600',
        rating: 4.5,
        brand: 'Sony',
        color: 'Black',
        connectivity: 'Bluetooth',
        wireless: true,
      },
      {
        id: 2,
        name: 'Smartphone Camera Gimbal',
        description:
          'Stabilize your smartphone videos with this advanced gimbal.',
        price: 159.99,
        image: 'https://fakeimg.pl/500x500/33aa33',
        rating: 4.2,
        brand: 'DJI',
        compatibility: 'iOS, Android',
        weight: '250g',
      },
      {
        id: 3,
        name: 'Professional DSLR Camera',
        description: 'Capture stunning photos with this high-end DSLR camera.',
        price: 1899.99,
        image: 'https://fakeimg.pl/500x500/4466cc',
        rating: 4.8,
        brand: 'Canon',
        resolution: '24.2MP',
        sensor: 'Full-frame',
      },
    ];
    tableapiService.getProductsList.and.returnValue(of(mockData)); // Mock successful response

    tick(); // Simulate asynchronous behavior

    fixture.detectChanges(); // Trigger change detection after mocking

    fixture.whenStable().then(() => {
      const productElements = fixture.debugElement.queryAll(
        By.css('.table-container tbody tr')
      ); // Assuming a CSS class for product elements

      expect(productElements.length).toBe(3); // Expect two product elements
      expect(productElements[0].nativeElement.textContent).toContain(
        mockData[0].name
      ); // Check product names
      expect(productElements[1].nativeElement.textContent).toContain(
        mockData[1].name
      );
      expect(productElements[2].nativeElement.textContent).toContain(
        mockData[2].name
      );
    });
  }));

  it('should handle error from API call (optional)', fakeAsync(() => {
    const mockError = new HttpErrorResponse({
      status: 404,
      statusText: 'Not Found',
    });
    tableapiService.getProductsList.and.returnValue(
      throwError(() => mockError)
    ); // Mock error

    tick(); // Simulate asynchronous behavior

    fixture.detectChanges(); // Trigger change detection after mocking

    // Add assertions to verify error handling behavior (e.g., displaying error message)
  }));
});
