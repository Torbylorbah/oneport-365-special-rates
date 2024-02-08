import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialRatesComponent } from './special-rates/special-rates.component';

const routes: Routes = [
  // {path:'', component: SpecialRatesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialRatesRoutingModule { }
