import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchDogsComponent } from './pages/search-dogs/search-dogs.component';
import { AdoptionFormComponent } from './pages/adoption-form/adoption-form.component'; 

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, SearchDogsComponent, AdoptionFormComponent] 
})
export class AppComponent {
  selectedTab: 'search' | 'adopt' = 'search';

  selectTab(tab: 'search' | 'adopt') {
    this.selectedTab = tab;
  }
}
