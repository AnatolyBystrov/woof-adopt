import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DogApiService } from './dog-api.service';

describe('DogApiService', () => {
  let service: DogApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DogApiService]
    });
    service = TestBed.inject(DogApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all breeds', () => {
    const mockResponse = {
      message: {
        husky: ['siberian'],
        labrador: []
      },
      status: 'success'
    };

    service.getAllBreeds().subscribe((res) => {
      expect(res).toEqual({
        husky: ['siberian'],
        labrador: []
      });
    });

    const req = httpMock.expectOne('https://dog.ceo/api/breeds/list/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch images by breed', () => {
    const breed = 'husky';
    const mockResponse = {
      message: ['image1.jpg', 'image2.jpg'],
      status: 'success'
    };

    service.getImagesByBreed(breed).subscribe((res) => {
      expect(res.message.length).toBe(2);
      expect(res.message).toContain('image1.jpg');
    });

    const req = httpMock.expectOne(`https://dog.ceo/api/breed/${breed}/images`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
