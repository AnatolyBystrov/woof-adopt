import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DogApiService {
  
  private baseUrl = 'https://dog.ceo/api';

  constructor(private http: HttpClient) {}

  getAllBreeds(): Observable<Record<string, string[]>> {
    return this.http.get<{ message: Record<string, string[]> }>(`${this.baseUrl}/breeds/list/all`)
      .pipe(map(res => res.message));
  }

  getImagesByBreed(breed: string): Observable<{ message: string[] }> {
    return this.http.get<{ message: string[] }>(`${this.baseUrl}/breed/${breed}/images`);
  }

  getImagesBySubBreed(breed: string, subBreed: string): Observable<{ message: string[] }> {
    return this.http.get<{ message: string[] }>(`${this.baseUrl}/breed/${breed}/${subBreed}/images`);
  }

  getSubBreeds(breed: string): Observable<any> {
    return this.http.get(`https://dog.ceo/api/breed/${breed}/list`);
  }

  getImages(breed: string, subBreed?: string): Observable<any> {
    const path = subBreed ? `${breed}/${subBreed}` : breed;
    return this.http.get(`https://dog.ceo/api/breed/${path}/images`);
  }
}
