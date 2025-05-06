import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from '../item.service';
import {Attribute} from '../material.model';
import {FloatLabel} from 'primeng/floatlabel';
import {InputNumberModule} from 'primeng/inputnumber';
import {Message} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {Toast} from 'primeng/toast';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FloatLabel, InputNumberModule, Toast],
  providers: [MessageService],
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  materialForm: FormGroup;
  categories: Attribute[] = [];
  units: Attribute[] = [];
  locations: Attribute[] = [];

  constructor(private fb: FormBuilder, private items: ItemService, private messageService: MessageService) {
    this.materialForm = this.fb.group({
      name: ['', Validators.required],
      category: [''],
      quantity: [0, Validators.required],
      price: [0, Validators.required],
      unit: [''],
      location: [''],
      description: ['']
    });

    this.items.getAttributes('category').then(res => this.categories = res.data as Attribute[]);
    this.items.getAttributes('unit').then(res => this.units = res.data as Attribute[]);
    this.items.getAttributes('location').then(res => this.locations = res.data as Attribute[]);
  }

  async submit() {
    this.materialForm.updateValueAndValidity();
    if (!this.materialForm.dirty){
      this.showError('form empty');
      return;
    }

    if(!this.materialForm.valid) {
      this.materialForm.markAllAsTouched();
      this.showError('Form is invalid');
      return;
    }
    const { error } = await this.items.addMaterial(this.materialForm.value);
    if (error) {
      this.showError('Failed to add material: ' + error.message);
    } else {
      this.showSuccess('Material added!');
      this.materialForm.reset();
    }
  }

  showSuccess(detail?: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: detail ?? 'Item added successfully!',
      life: 3000, // Optional: how long it should stay on screen
    });
  }

  showError(detail?: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: detail ?? 'Something went wrong.',
      life: 3000,
    });
  }
}
