import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from 'angularfire2';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import * as environment from '../environments/environment.prod';
import { Camera } from '@ionic-native/camera/ngx';
export const firebaseConfig = {
  apiKey: "AIzaSyC6yUdjChlLzMkas7A83HIbQ5wdC5ljz8I",
  authDomain: "ionic-auth-76044.firebaseapp.com",
  databaseURL: "https://ionic-auth-76044.firebaseio.com",
  projectId: "ionic-auth-76044",
  storageBucket: "ionic-auth-76044.appspot.com",
  messagingSenderId: "1087805630692",
  appId: "1:1087805630692:web:7733eea1abcf5f7afde4f1",
  measurementId: "G-4X9YKD3XTZ"
}
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GooglePlus
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
