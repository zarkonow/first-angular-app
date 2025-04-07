import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import  { type Task } from './task.model';

import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';





@Component({
  selector: 'app-task',
  imports: [ DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task
  private tasksService = Inject(TasksService)

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id)
  }
}
