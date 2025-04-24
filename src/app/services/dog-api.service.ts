import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogApiService {
  private baseUrl = 'https://dog.ceo/api';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<string[]> {
    return this.http
      .get<{ message: Record<string, string[]> }>(`${this.baseUrl}/breeds/list/all`)
      .pipe(
        map((response) => Object.entries(response.message)
          .filter(([_, subBreeds]) => subBreeds.length > 0)
          .map(([breed]) => breed))
      );
  }

  getImagesByBreed(breed: string): Observable<{ message: string[] }> {
    return this.http.get<{ message: string[] }>(`${this.baseUrl}/breed/${breed}/images`);
  }
}
