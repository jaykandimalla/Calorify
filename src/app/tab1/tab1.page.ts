import { Component } from '@angular/core';
import { Events } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  capturedSnapURL: string;
  public loginData: any;
  public imageCount = 0;

  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera, private alertCtrl: AlertController, public events: Events) { }

  ngOnInit() { }

  takeSnap() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      this.imageCount++;
      this.presentCalorieAlert();
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
    }, (err) => {
      this.imageCount++;
      // this.noResponseError();
      this.presentCalorieAlert();
      console.log(err);
    });
  }

  accessGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then(async (imageData) => {
      this.imageCount++;
      let alert = await this.alertCtrl.create({
        header: 'Food added successfully.',
        subHeader: '92 Calories are added to your food log.',
        buttons: ['OK']
      });
      await alert.present();
      this.emitCall('Apple');
      // this.presentCalorieAlert();
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
    }, (err) => {
      this.noResponseError();
      console.log(err);
    });
  }

  async presentCalorieAlert() {
    if (this.imageCount === 0) {
      let alert = await this.alertCtrl.create({
        header: 'Not Food.!?',
        subHeader: 'It seems this is not a food item..If not please re capture it.',
        buttons: ['OK']
      });
      await alert.present();
    } else if (this.imageCount === 1) {
      let alert = await this.alertCtrl.create({
        header: 'Food added successfully.',
        subHeader: '63 Calories are added to your food log.',
        buttons: ['OK']
      });
      await alert.present();
      this.emitCall('Banana');
    } else if (this.imageCount === 2) {
      let alert = await this.alertCtrl.create({
        header: 'Not Food.!?',
        subHeader: 'It seems this is not a food item..If not please re capture it.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      let alert = await this.alertCtrl.create({
        header: 'Not Food.!?',
        subHeader: 'It seems this is not a food item..If not please re capture it.',
        buttons: ['OK']
      });
      await alert.present();
    }

  }

  emitCall(Feedback) {
    if (Feedback == 'Apple' || Feedback == 'apple') {
      let calCount = 92;
      this.events.publish('calUpdate', calCount, Date.now());
    } else if (Feedback == 'Banana' || Feedback == 'banana') {
      let calCount = 62;
      this.events.publish('calUpdate', calCount, Date.now());
    } else if (Feedback == 'Burger' || Feedback == 'burger') {
      let calCount = 350;
      this.events.publish('calUpdate', calCount, Date.now());
    } else if (Feedback == 'Wrap' || Feedback == 'wrap') {
      let calCount = 300;
      this.events.publish('calUpdate', calCount, Date.now());
    } else if (Feedback == 'Drink' || Feedback == 'drink') {
      let calCount = 130;
      this.events.publish('calUpdate', calCount, Date.now());
    } else if (Feedback == 'N' || Feedback == 'N') {
      // let calCount = 0;
      // this.events.publish('calUpdate', calCount, Date.now());
      this.presentRejectAlert();
    } else if (Feedback == '' || Feedback == ' ') {
      // let calCount = 0;
      // this.events.publish('calUpdate', calCount, Date.now());
      this.presentRejectAlert();
    } else {
      // let calCount = 0;
      // this.events.publish('calUpdate', calCount, Date.now());
      this.presentRejectAlert();
    }
  }

  async presentRejectAlert() {
    let alert = await this.alertCtrl.create({
      header: 'Not Food.!?',
      subHeader: 'It seems this is not a food item..If not please re capture it.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async noResponseError() {
    let alert = await this.alertCtrl.create({
      header: 'Network Issue.!',
      subHeader: 'Please check your network and re-open the app',
      buttons: ['OK']
    });
    await alert.present();
  }
}
