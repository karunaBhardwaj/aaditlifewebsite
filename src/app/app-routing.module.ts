import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WorkingComponent } from './working/working.component';
import { PricingComponent } from './pricing/pricing.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent
  },
  {
    path: 'working',
    component: WorkingComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
