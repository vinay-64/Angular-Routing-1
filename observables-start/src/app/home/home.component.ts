import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription, interval,Observable } from 'rxjs';
import { count } from 'rxjs-compat/operator/count';
// import {  } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  myfirstObsSubscription: Subscription;
  data;
  constructor() { }

  ngOnInit() {
    // this.myfirstObsSubscription = interval(1000).subscribe(
    //   (count)=>{
    //     console.log(count);
    //   }
    // )

    const customObservable = Observable.create(observer=>{
      let count=0
      setInterval(()=>{
        observer.next(count);
        count++;
      },1000);
    })

    this.myfirstObsSubscription= customObservable.subscribe(
      (data1)=>{
        console.log(data1);
        this.data=data1;
      }
    )

  }
  ngOnDestroy(){
    this.myfirstObsSubscription.unsubscribe();
  }

}
