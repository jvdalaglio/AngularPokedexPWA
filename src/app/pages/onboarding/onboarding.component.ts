import { Component } from '@angular/core';
import * as data from './onboarding.mock.json'
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent {

  constructor(
    private router: Router
  ) {}

  public pages = data;
  public index = 0;

  changeIndex(index: number) {
    this.index = index
    if(index > 2) {
      this.router.navigate([''])
    }
    console.log(index)
  }

}
