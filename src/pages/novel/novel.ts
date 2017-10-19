import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TopUpdatePage } from '../top-update/top-update';
import { ChapterPage } from '../chapter/chapter';

/**
 * Generated class for the NovelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-novel',
  templateUrl: 'novel.html',
})
export class NovelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   goTopUpdate(){
     this.navCtrl.pop();
  }

  goChapter(){
    this.navCtrl.push(ChapterPage);
  }
//<button (click)="goTopUpdate()">
  ionViewDidLoad() {
    console.log('ionViewDidLoad NovelPage');
  }

}
