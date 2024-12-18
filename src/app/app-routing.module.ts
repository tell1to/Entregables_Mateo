import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grid1Component } from './components/grid-1/grid-1.component';
import { Grid2Component } from './components/grid-2/grid-2.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { FormsNGComponent } from './components/forms-ng/forms-ng.component';
import { GalleryComponent } from './components/gallery/gallery.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'grid-1', component: Grid1Component },
  { path: 'grid-2', component: Grid2Component },
  { path: 'cards', component: CardsComponent },
  {path: 'form', component:FormsNGComponent},
  {path:'gallery', component:GalleryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
