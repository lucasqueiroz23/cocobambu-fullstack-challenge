import { Routes } from '@angular/router';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { FavoritesPageComponent } from './favorites/favorites-page/favorites-page.component';

export const routes: Routes = [
    {path: 'search', component: SearchPageComponent},
    {path: 'favorites', component: FavoritesPageComponent},
    {path: '', redirectTo: 'search', pathMatch: 'full'},
];
