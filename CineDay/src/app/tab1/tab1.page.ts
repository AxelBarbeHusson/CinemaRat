import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http/src/client';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public cinema:any;
  constructor(public navCtrl: NavController, public http: HttpClient) {
  this.loadData();
}
 loadData(){
 let data:Observable<any>
 data = this.http.get('http://localhost:3000/cinema')
 data.subscribe(result =>{
  this.cinema = result;
 })
  }
}
