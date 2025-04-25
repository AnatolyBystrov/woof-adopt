import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { signal, WritableSignal, computed } from '@angular/core';
import { DogApiService } from '../../services/dog-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search-dogs',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './search-dogs.component.html',
  styleUrl: './search-dogs.component.css'
})
export class SearchDogsComponent {
  private http = inject(HttpClient);
  private dogApiService = inject(DogApiService); 

  readonly breeds: WritableSignal<string[]> = signal([]);
  readonly subBreeds: WritableSignal<string[]> = signal([]);
  readonly selectedBreed: WritableSignal<string> = signal('');
  readonly selectedSubBreed: WritableSignal<string> = signal('');
  readonly images: WritableSignal<string[]> = signal([]);

  ngOnInit(): void {
    this.fetchBreeds();
  }
  

  fetchBreeds() {
    this.http
      .get<{ message: Record<string, string[]> }>('https://dog.ceo/api/breeds/list/all')
      .subscribe(res => {
        const breedsWithSubBreeds = Object.entries(res.message)
          .filter(([_, subBreeds]) => subBreeds.length > 0)
          .map(([breed]) => breed);
        this.breeds.set(breedsWithSubBreeds);
      });
  }

  fetchSubBreeds(breed: string) {
    this.dogApiService.getSubBreeds(breed).subscribe((res: any) => {
      this.subBreeds.set(res.message);
    });
  }

  fetchImages(breed: string, subBreed?: string) {
    this.dogApiService.getImages(breed, subBreed).subscribe((res: any) => {
      this.images.set(res.message.slice(0, 6));
    });
  }

  onBreedChange(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    const value = target?.value || '';
    if (!value) return;
    this.selectedBreed.set(value);
    this.selectedSubBreed.set('');
    this.fetchSubBreeds(value);
    this.fetchImages(value);
  }

  onSubBreedChange(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    const value = target?.value || '';
    if (!value) return;
    const breed = this.selectedBreed();
    this.selectedSubBreed.set(value);
    this.fetchImages(breed, value);
  }

  breedsList = () => this.breeds();
  subBreedsList = () => this.subBreeds();
  selectedBreedValue = () => this.selectedBreed();
  selectedSubBreedValue = () => this.selectedSubBreed();
  imagesList = () => this.images();
}
