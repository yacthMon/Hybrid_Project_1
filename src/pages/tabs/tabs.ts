import { Component } from '@angular/core';

import { TopUpdatePage } from '../top-update/top-update';
import { AboutMePage } from '../about-me/about-me';
import { SettingPage } from '../setting/setting';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  TopUpdate = TopUpdatePage;  
  AboutMe = AboutMePage;
  setting = SettingPage;
  constructor() {

  }
}
