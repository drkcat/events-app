import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseService } from '../../services/database.service';
import { Event } from '../../models/event.model';
/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'Details'
})
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  id: number;
  event: Event;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: DatabaseService
  ) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    this.db.events.subscribe(
      (data) => {
        this.event = new Event();
        this.event.loadFromDatabase(this.id, data[this.id]);
      }
    );
  }

}
