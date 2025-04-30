import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-grid',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './item-grid.component.html',
})
export class ItemGridComponent {
  items = [
    { id: 1, name: 'Apple', quantity: 10 },
    { id: 2, name: 'Banana', quantity: 5 }
  ];

  editIndex: number | null = null;
  editForm!: FormGroup;

  constructor(private fb: FormBuilder, private machines: ItemService) {}


  loadMachines(){
    this.machines.getMaterials().then((data) => {
      console.log(data); // Logs the fetched data
    }).catch((error) => {
      console.error('Error fetching data:', error); // Logs any errors
    });
  }

  startEdit(index: number) {
    const item = this.items[index];
    this.editForm = this.fb.group({
      name: [item.name],
      quantity: [item.quantity]
    });
    this.editIndex = index;
  }

  saveEdit() {
    if (this.editForm.valid && this.editIndex !== null) {
      this.items[this.editIndex] = {
        ...this.items[this.editIndex],
        ...this.editForm.value
      };
      this.editIndex = null;
    }
  }

  cancelEdit() {
    this.editIndex = null;
  }

  get nameControl(): FormControl {
    return this.editForm.get('name') as FormControl;
  }

  get numberControl(): FormControl {
    return this.editForm.get("quantity") as FormControl
  }
}
