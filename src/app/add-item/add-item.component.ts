import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from '../item.service';
import {Attribute} from '../material.model';
import {FloatLabel} from 'primeng/floatlabel';
import {InputNumberModule} from 'primeng/inputnumber';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FloatLabel, InputNumberModule],
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  materialForm: FormGroup;
  categories: Attribute[] = [];
  units: Attribute[] = [];
  locations: Attribute[] = [];

  constructor(private fb: FormBuilder, private items: ItemService) {
    this.materialForm = this.fb.group({
      name: [''],
      category: [''],
      quantity: [0],
      price: [0],
      unit: [''],
      location: [''],
      description: ['']
    });

    this.items.getAttributes('category').then(res => this.categories = res.data as Attribute[]);
    this.items.getAttributes('unit').then(res => this.units = res.data as Attribute[]);
    this.items.getAttributes('location').then(res => this.locations = res.data as Attribute[]);
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
