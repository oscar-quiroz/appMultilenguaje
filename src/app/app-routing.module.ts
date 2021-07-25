import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslationComponent } from './translation/translation.component';
import { DetailsComponent } from './pages/details/details.component';
import { CarComponent } from './pages/car/car.component';

const routes: Routes = [{
  
    path: '',
    component: TranslationComponent,
  },{
    path: 'details/:id',
    component: DetailsComponent,
  },{
    path: 'car',
    component: CarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
