import { Component, Input, } from '@angular/core';
import { TaskComponent } from "./task/task.component";
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input ({ required: true }) userId!: string;
  @Input ({ required: true}) name!: string;
  tasks = [
  {
    id: 't1',
    userId: 'u0',
    title: 'Master Angular',
    summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2017-3-18',
  },
  {
    id: 't1',
    userId: 'u1',
    title: 'Master CSS',
    summary: 'Learn all the basic and advanced features of CSS & how to apply them.',
    dueDate: '2020-6-17',
  }, 
  {
    id: 't1',
    userId: 'u2',
    title: 'Master TypeScript',
    summary: 'Learn all the basic and advanced features of TypeScript & how to apply them.',
    dueDate: '2021-7-25',
  },
  {
    id: 't1',
    userId: 'u3',
    title: 'Master React',
    summary: 'Learn all the basic and advanced features of React & how to apply them.',
    dueDate: '2022-11-07',
  },
  {
    id: 't1',
    userId: 'u4',
    title: 'Master Python',
    summary: 'Learn all the basic and advanced features of Python & how to apply them.',
    dueDate: '2024-12-31',
  },
  {
    id: 't1',
    userId: 'u5',
    title: 'Master C',
    summary: 'Learn all the basic and advanced features of C & how to apply them.',
    dueDate: '2025-6-08',
  },
  {
    id: 't1',
    userId: 'u4',
    title: 'Master C#',
    summary: 'Learn all the basic and advanced features of C# & how to apply them.',
    dueDate: '2027-5-06',
  },
  {
    id: 't1',
    userId: 'u5',
    title: 'Master SwiftUi',
    summary: 'Learn all the basic and advanced features of SwiftUi & how to apply them.',
    dueDate: '2026-10-05',
  },
  {
    id: 't1',
    userId: 'u6',
    title: 'Master JavaScript',
    summary: 'Learn all the basic and advanced features of JavaScript & how to apply them.',
    dueDate: '2023-2-08',
  }    ]
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
