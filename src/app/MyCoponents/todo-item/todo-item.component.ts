
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() i!:Number;
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter()
  @Output() todoChackBox:EventEmitter<Todo> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo)
    console.log("onclick has been trigger");
    
  }
  onCheckboxClick(todo: Todo | undefined){
    this.todoChackBox.emit(todo)
    
  }

}
