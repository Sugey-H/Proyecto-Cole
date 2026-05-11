import { Component } from '@angular/core';

import {
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonTextarea
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonItem,
    IonInput,
    IonTextarea
  ]
})

export class AgendaPage {

}