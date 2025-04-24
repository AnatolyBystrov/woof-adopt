import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogApiService } from '../../services/dog-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-search-dogs',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-dogs.component.html',
  styleUrls: ['./search-dogs.component.css'],
})
export class SearchDogsComponent implements OnInit {
  breeds: string[] = [];
  imagesList: string[] = [];
  selectedBreed = '';

  constructor(private dogApi: DogApiService) {}

  ngOnInit() {
    this.dogApi.getBreeds().subscribe((breeds) => {
      this.breeds = breeds;
      if (breeds.length > 0) {
        this.selectedBreed = breeds[0];
        this.loadImages();
      }
    });
  }

  onBreedChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedBreed = target.value;
    this.loadImages();
  }

  loadImages() {
    this.dogApi.getImagesByBreed(this.selectedBreed).subscribe((data) => {
      this.imagesList = data.message;
    });
  }

  images() {
    return this.imagesList;
  }
}
