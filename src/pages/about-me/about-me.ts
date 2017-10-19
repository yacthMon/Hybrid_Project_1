import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChapterPage } from '../chapter/chapter';
import { BookmarkPage } from '../bookmark/bookmark';
import { SettingPage } from '../setting/setting';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AboutMePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about-me',
  templateUrl: 'about-me.html',
})
export class AboutMePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goLogin(){
    this.navCtrl.push(LoginPage);
  }

  goChapter(){
    this.navCtrl.push(ChapterPage);
  }

  goBookmark(){
    this.navCtrl.push(BookmarkPage);
  }

  goSetting(){
    this.navCtrl.push(SettingPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutMePage');
  }

}
