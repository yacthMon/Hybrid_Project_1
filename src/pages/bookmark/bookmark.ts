import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NovelPage } from '../novel/novel';

/**
 * Generated class for the BookmarkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html',
})
export class BookmarkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarkPage');
  }

  goNovel(){
    this.navCtrl.push(NovelPage);
  }

}
