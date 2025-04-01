import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input() name?:string;
 tasks = {
  id: 't1',
  userId: 'u1',
  title: 'Master Angular',
  summary: 'Learn Angular from scratch and more advanced topics',
  sueData: '2025-12-31'
 }
}
