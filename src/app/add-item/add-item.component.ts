import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  materialForm: FormGroup;

  constructor(private fb: FormBuilder, private items: ItemService) {
    this.materialForm = this.fb.group({
      name: [''],
      category: [''],
      quantity: [0],
      unit: [''],
      location: [''],
      description: ['']
    });
  }

  async submit() {
    if (!this.materialForm.dirty){
      alert('form empty');
      return;
    }
    const { error } = await this.items.addMaterial(this.materialForm.value);
    if (error) {
      alert('Failed to add material: ' + error.message);
    } else {
      alert('Material added!');
      this.materialForm.reset();
    }
  }
}
