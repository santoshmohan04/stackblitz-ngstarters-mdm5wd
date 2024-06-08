import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  taskLists: any = [];
  inpVal = '';
  strikeIndex: number | null = null;

  generateRandomId() {
    return Math.random().toString(36).substr(2, 9);
  }

  addTask() {
    if (this.inpVal === '') {
      alert('Please Enter a Task');
    } else {
      const payload = {
        id: this.generateRandomId(),
        task: this.inpVal,
        completed: false,
      };
      this.taskLists.push(payload);
      this.inpVal = '';
    }
  }

  deleteTask(data: any) {
    this.taskLists = this.taskLists.filter((t: any) => t.id !== data.id);
  }
}
