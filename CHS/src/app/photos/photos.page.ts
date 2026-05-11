import { Component } from '@angular/core';

import {
  IonContent,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton
  ]
})

export class PhotosPage {

}