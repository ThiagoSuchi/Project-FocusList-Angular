// Lógica de negócio e persistência (localStorage)

import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.models';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly _tasks = signal<Task[]>([]);

  readonly tasks = this._tasks.asReadonly();

  constructor() {}

  postTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };

    this._tasks.update(t => [...t, newTask]);
  }

  taskCompleted(task: Task) {
    task.completed = !task.completed;
  }
}
