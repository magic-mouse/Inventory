import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent {
  materialForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.materialForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      unit: ['', Validators.required],
      specifications: [''],
      cost: ['', Validators.required],
      supplier: [''],
      acquired: ['', Validators.required],
      photo: [null],
      orders: ['']
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.materialForm.patchValue({ photo: file });

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submit() {
    if (this.materialForm.valid) {
      const formData = this.materialForm.value;
      console.log('Form submitted:', formData);
      // You can emit, send to a service, or post to a server here
    }
  }
}
