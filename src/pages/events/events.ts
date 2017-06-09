import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseService } from '../../services/database.service';
import { Event } from '../../models/event.model';
/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  events: Array<Event>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: DatabaseService
  ) {
    this.events = [];
  }

  ionViewDidLoad() {
    this.db.events.subscribe(
      (data) => {
        for(let i in data){
          let event = new Event();
          event.loadFromDatabase(Number(i), data[i]);
          this.events.push(event);
        }
      });
    console.log('ionViewDidLoad EventsPage');
  }

  viewDetails(event_id: number) {
    this.navCtrl.push('Details', { id: event_id});
  }

  filterEvents(event: any) {
    return this.events;
  }

}
