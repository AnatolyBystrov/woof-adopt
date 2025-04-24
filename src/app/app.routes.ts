import { Routes } from '@angular/router';
import {SearchDogsComponent} from './pages/search-dogs/search-dogs.component';
import { AdoptionFormComponent } from './pages/adoption-form/adoption-form.component';

export const routes: Routes = [
    {path:'',redirectTo:'search', pathMatch: 'full'},
    {path:'search',component:SearchDogsComponent},
    {path:'adopt',component:AdoptionFormComponent},
];
