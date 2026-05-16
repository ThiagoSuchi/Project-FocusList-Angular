import { Component, inject, OnInit } from '@angular/core';
import { Title } from "../../components/shared/title/title";
import { TaskService } from '../../services/task.service';
import type { ITask } from '../../models/task.models';

@Component({
  selector: 'app-today',
  imports: [Title],
  templateUrl: './today.html',
  styleUrl: './today.css',
})
export class Today implements OnInit {
  tasks: ITask[] = [];
  readonly taskService = inject(TaskService);

  ngOnInit(): void {
    this.getAllTask();
  }

  getAllTask(): void {
    this.taskService.getAllTask().subscribe({
      next: (data) => this.tasks = data,
      error: (err) => console.error(err)
    });
  }

  postTask(event: Event, valueInput: HTMLInputElement) {
    event.preventDefault();

    const title = valueInput.value.trim();
    if (!title) return;

    this.taskService.postTask({ title, completed: false }).subscribe({
      next: (createdTask) => {
        this.tasks = [...this.tasks, createdTask];
        valueInput.value = '';
      },
      error: (err) => console.error('Erro ao criar task', err)
    });
  }

  taskCompleted(task: ITask): void {
    this.taskService.taskCompleted(task).subscribe({
      next: () => {
        const t = this.tasks.find(t => t.id === task?.id);
        if (t) t.completed = !t.completed;
      } // Atualiza localmente, recarrega do banco
    })
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(() => this.getAllTask());
  }
}
