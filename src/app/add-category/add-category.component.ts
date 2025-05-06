import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from '../item.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-category',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent implements OnInit {
  @Input() type: 'category' | 'unit' | 'location' = 'category';
  attributeForm: FormGroup;
  attributes: any[] = []; // Adjust type as needed



  constructor(private fb: FormBuilder, private items: ItemService, private route: ActivatedRoute, private messageService: MessageService) {
    this.attributeForm = this.fb.group({
      name: [''],
    });
  }

  ngOnInit() {
      this.route.paramMap.subscribe(paramMap => {
        const routeType = paramMap.get('type') as 'category' | 'unit' | 'location';
        if (routeType && routeType !== this.type) {
          this.type = routeType;

         this.loadList();

          this.attributeForm.reset(); // optional: reset when type changes
        }
      });
  }

  async submit() {
    if (!this.attributeForm.dirty){
      alert('form empty');
      return;
    }

    const payload = { ...this.attributeForm.value, type: this.type };
    const { error } = await this.items.addAttribute(payload);

    if (error) {
      alert('Failed to add ' + this.type + ': ' + error.message);
    } else {
      alert(`${this.type} added!`);
      this.loadList();
      this.attributeForm.reset();
    }
  }

  loadList(){
    this.items.getAttributes(this.type).then(result => { 
      if (result) {
        this.attributes = result.data ?? [];
      } else {
        alert('Failed to load data');
      }
    });
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Item added successfully!',
      life: 3000, // Optional: how long it should stay on screen
    });
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Something went wrong.',
      life: 3000,
    });
  }

}
