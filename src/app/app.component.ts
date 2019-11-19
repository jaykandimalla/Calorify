import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public loginShow = true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public google: GooglePlus,
    // private fireAuth: AngularFireAuth
  ) {
    this.initializeApp();
  }

  login() {
    this.google.login({
      'webClientId': '1087805630692-73n5ntr8imbcdvsqmbi67q9jfujgrqm2.apps.googleusercontent.com',
      'offline': true
    }).then((res) => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(suc => {
        this.loginShow = !this.loginShow;
      }).catch(err => {
        this.loginShow = !this.loginShow;
      })
    }).catch(error => {
      this.loginShow = !this.loginShow;
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
