import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SplashComponent } from './splash/splash.component';
import { OnboardingComponent } from './onboarding/onboarding.component';


@NgModule({
  declarations: [
    SplashComponent,
    OnboardingComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
