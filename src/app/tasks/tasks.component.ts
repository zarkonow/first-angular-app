import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = [{
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn Angular from scratch and more advanced topics',
    dueDate: '2025-12-31',
  },
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn Angular from scratch and more advanced topics',
    dueDate: '2025-12-31'
  },
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
}
