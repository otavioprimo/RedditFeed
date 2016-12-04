import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { TopPage } from '../top/top';
import { RandomPage } from '../random/random';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  homePage: any = HomePage;
  topPage: any = TopPage;
  randomPage: any = RandomPage;

  constructor(public nav: NavController) {

  }
}
