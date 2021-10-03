import { Component } from '@angular/core';
import { Task } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskList';
  str = ""
  textVal:Task = {
    title: "",
    completed: false
  };
  
  tasks:Array<Task> = [
    {
      title: "A default task",
      completed: false
    },
    {
      title: "A completed default task",
      completed: true
    }
  ]

  addTask(str:string){
    if(str!=""){
      this.tasks.push({title: str, completed: false})
      console.log(this.tasks)
      this.str=""
    }
  }

  clear(){
    for(let index = this.tasks.length-1; index>=0; index--){
      if(this.tasks[index].completed){
        this.tasks.splice(index, 1)
      }
    };
  }

}