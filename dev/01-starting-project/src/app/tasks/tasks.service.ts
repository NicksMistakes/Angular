import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";
@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u0',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2017-3-18',
    },
    {
      id: 't1',
      userId: 'u1',
      title: 'Master CSS',
      summary:
        'Learn all the basic and advanced features of CSS & how to apply them.',
      dueDate: '2020-6-17',
    },
    {
      id: 't1',
      userId: 'u2',
      title: 'Master TypeScript',
      summary:
        'Learn all the basic and advanced features of TypeScript & how to apply them.',
      dueDate: '2021-7-25',
    },
    {
      id: 't1',
      userId: 'u3',
      title: 'Master React',
      summary:
        'Learn all the basic and advanced features of React & how to apply them.',
      dueDate: '2022-11-07',
    },
    {
      id: 't1',
      userId: 'u4',
      title: 'Master Python',
      summary:
        'Learn all the basic and advanced features of Python & how to apply them.',
      dueDate: '2024-12-31',
    },
    {
      id: 't1',
      userId: 'u5',
      title: 'Master C',
      summary:
        'Learn all the basic and advanced features of C & how to apply them.',
      dueDate: '2025-6-08',
    },
    {
      id: 't1',
      userId: 'u4',
      title: 'Master C#',
      summary:
        'Learn all the basic and advanced features of C# & how to apply them.',
      dueDate: '2027-5-06',
    },
    {
      id: 't1',
      userId: 'u5',
      title: 'Master SwiftUi',
      summary:
        'Learn all the basic and advanced features of SwiftUi & how to apply them.',
      dueDate: '2026-10-05',
    },
    {
      id: 't1',
      userId: 'u6',
      title: 'Master JavaScript',
      summary:
        'Learn all the basic and advanced features of JavaScript & how to apply them.',
      dueDate: '2023-2-08',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
        this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      userId: userId,
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
function Injectible(target: typeof TasksService): void | typeof TasksService {
    throw new Error("Function not implemented.");
}

