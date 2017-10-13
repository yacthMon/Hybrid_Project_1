import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NovelTypePage } from '../novel-type/novel-type';
/**
 * Generated class for the TopUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-top-update',
  templateUrl: 'top-update.html',
})
export class TopUpdatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopUpdatePage');
  }

  goSelectType(){
    this.navCtrl.push(NovelTypePage);
  }

}
