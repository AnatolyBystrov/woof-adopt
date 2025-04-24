import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogApiService {
  private baseUrl = 'https://dog.ceo/api';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<string[]> {
    return this.http.get<{ message: Record<string, string[]>, status: string }>(`${this.baseUrl}/breeds/list/all`).pipe(
      map((response) => {
        const breedsWithSub = Object.entries(response.message)
          .filter(([_, subBreeds]) => subBreeds.length > 0)
          .map(([breed]) => breed);
        return breedsWithSub;
      })
    );
  }

  getImagesByBreed(breed: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/breed/${breed}/images`);
  }
}
