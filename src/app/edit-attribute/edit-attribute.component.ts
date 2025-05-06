import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from '../item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-attribute',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-attribute.component.html',
  styleUrls: ['./edit-attribute.component.scss']
})
export class EditAttributeComponent implements OnInit {
  type: 'category' | 'unit' | 'location' = 'category';
  id!: number;
  attributeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private items: ItemService
  ) {
    this.attributeForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params) => {
      this.type = params.get('type') as any;
      this.id = +(params.get('id') || 0);

      const result = await this.items.getAttribute(this.type, this.id);
      if (result) {
       console.log(result);
      } else {
        alert('Failed to load data');
      }
    });
  }

  async save() {
    if (!this.attributeForm.dirty) {
      alert('No changes made');
      return;
    }

    const { error } = await this.items.updateAttribute(this.type, this.id, this.attributeForm.value);

    if (error) {
      alert(`Failed to update ${this.type}: ${error.message}`);
    } else {
      alert(`${this.type} updated!`);
    }
  }
}
