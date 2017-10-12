import { Component } from '@angular/core';

import { TopUpdatePage } from '../top-update/top-update';
import { AboutMePage } from '../about-me/about-me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  TopUpdate = TopUpdatePage;  
  AboutMe = AboutMePage;

  constructor() {

  }
}
