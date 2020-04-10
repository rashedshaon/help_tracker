import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public translate: TranslateService,
  ) {

    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.initializeApp();
  }

  initializeApp() 
  {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.appRouting();
    });
  }

  appRouting() 
  {
    if (localStorage.getItem("isLogin")) 
    {
      this.navCtrl.navigateRoot(["/home"]);
    }
    else 
    {
      this.navCtrl.navigateRoot(["/login"]);
    }
  }
}
