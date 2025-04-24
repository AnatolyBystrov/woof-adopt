import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {
  constructor(private http: HttpClient) {}

  getAllBreeds(): Observable<string[]> {
    return this.http.get<{ message: Record<string, string[]>, status: string }>(
      'https://dog.ceo/api/breeds/list/all'
    ).pipe(
      map(res => Object.keys(res.message))
    );
  }

  getImagesByBreed(breed: string): Observable<string[]> {
    return this.http.get<{ message: string[], status: string }>(
      `https://dog.ceo/api/breed/${breed}/images`
    ).pipe(
      map(res => res.message)
    );
  }
}
