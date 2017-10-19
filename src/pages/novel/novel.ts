import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TopUpdatePage } from '../top-update/top-update';
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
//<button (click)="goTopUpdate()">
  ionViewDidLoad() {
    console.log('ionViewDidLoad NovelPage');
  }

}
