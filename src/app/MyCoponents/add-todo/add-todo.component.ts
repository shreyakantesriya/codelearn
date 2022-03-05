import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title!:String;
  decs!:String;
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
 
  onSubmit(){
    const todo = {
      No:8,
      title:this.title,
      decs:this.decs,
      active:true
    }
    
    this.todoAdd.emit(todo);
  }


}
