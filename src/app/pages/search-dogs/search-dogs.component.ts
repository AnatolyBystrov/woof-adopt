import { Component, effect, signal } from '@angular/core';
import { DogApiService } from '../../services/dog-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-dogs',
  templateUrl: './search-dogs.component.html',
  styleUrls:['./search-dogs.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SearchDogsComponent {
  breeds = signal<string[]>([]);
  subBreeds = signal<string[]>([]);
  selectedBreed = signal('');
  selectedSubBreed = signal('');
  imagesList = signal<string[]>([]);

  constructor(private dogApi: DogApiService) {
    this.fetchBreeds();
    effect(() => {
      if (this.selectedBreed()) {
        this.fetchSubBreeds(this.selectedBreed());
      }
    });
  }

  fetchBreeds() {
    this.dogApi.getAllBreeds().subscribe((res) => {
      this.breeds.set(Object.keys(res).filter((breed) => res[breed].length > 0));
    });
  }

  fetchSubBreeds(breed: string) {
    this.dogApi.getSubBreeds(breed).subscribe((res: any) => {
      this.subBreeds.set(res.message);
    });
  }

  onBreedChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const breed = select.value;
    this.selectedBreed.set(breed);
    this.selectedSubBreed.set('');
    this.dogApi.getImagesByBreed(breed).subscribe((res) => this.imagesList.set(res.message));
  }

  onSubBreedChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const subBreed = select.value;
    this.selectedSubBreed.set(subBreed);
    this.dogApi.getImagesBySubBreed(this.selectedBreed(), subBreed).subscribe((res) =>
      this.imagesList.set(res.message)
    );
  }
}
