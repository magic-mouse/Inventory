import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-grid',
  imports: [],
  templateUrl: './item-grid.component.html',
  styleUrl: './item-grid.component.scss'
})
export class ItemGridComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([]),
    });

    // Dummy data
    const data = [
      { name: 'Apple', quantity: 10 },
      { name: 'Banana', quantity: 5 },
      { name: 'Orange', quantity: 7 },
    ];

    this.setItems(data);
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  setItems(data: any[]) {
    const itemsFGs = data.map(item =>
      this.fb.group({
        name: [item.name],
        quantity: [item.quantity],
      })
    );
    this.form.setControl('items', this.fb.array(itemsFGs));
  }

  logValues() {
    console.log(this.form.value);
  }
}

