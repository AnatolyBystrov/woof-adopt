import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogApiService } from '../../services/dog-api.service';

@Component({
  standalone: true,
  selector: 'app-search-dogs',
  imports: [CommonModule],
  templateUrl: './search-dogs.component.html',
  styleUrls: ['./search-dogs.component.css']
})
export class SearchDogsComponent implements OnInit {
  breeds: string[] = [];
  imagesList: string[] = [];
  selectedBreed: string = '';

  constructor(private dogApi: DogApiService) {}

  ngOnInit() {
    this.dogApi.getAllBreeds().subscribe((breeds) => {
      this.breeds = breeds;
    });
  }

  onBreedChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedBreed = target.value;
    this.loadImages();
  }

  loadImages() {
    this.dogApi.getImagesByBreed(this.selectedBreed).subscribe((images) => {
      this.imagesList = images;
    });
  }

  images() {
    return this.imagesList;
  }
}
