import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TopUpdatePage } from '../pages/top-update/top-update';
import { AboutMePage } from '../pages/about-me/about-me';
import { TabsPage } from '../pages/tabs/tabs';
import { NovelTypePage } from '../pages/novel-type/novel-type';
import { NovelPage } from '../pages/novel/novel';
import { ChapterPage } from '../pages/chapter/chapter';
import { SettingPage } from '../pages/setting/setting';
import { BookmarkPage } from '../pages/bookmark/bookmark';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TopUpdatePage,
    AboutMePage,
    TabsPage,
    NovelTypePage,
    NovelPage,
    ChapterPage,
    SettingPage,
    BookmarkPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TopUpdatePage,
    AboutMePage,
    TabsPage,
    NovelTypePage,
    NovelPage,
    ChapterPage,
    SettingPage,
    BookmarkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
