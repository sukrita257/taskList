import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() myData?: any;
  @Output() checkEvent = new EventEmitter()
  @Output() addEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  triggerCheck(i:number){
    this.myData[i].completed = !this.myData[i].completed;
    console.log(this.myData[i].completed)
    // this.checkEvent.emit(this.myData[i].completed)
  }

  // triggerAdd(item:string){

  //   this.addEvent.emit(item)
  // }

}
