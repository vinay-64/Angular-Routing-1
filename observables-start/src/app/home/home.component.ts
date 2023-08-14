import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  myfirstObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.myfirstObsSubscription = interval(1000).subscribe(
      (count)=>{
        console.log(count);
      }
    )
  }
  ngOnDestroy(){
    this.myfirstObsSubscription.unsubscribe();
  }

}
