import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'onboarding',
    component: OnboardingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
