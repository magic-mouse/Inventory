import { Routes } from '@angular/router';
import { MaterialFormComponent } from './materials/material-form/material-form.component';
import { ItemGridComponent } from './item-grid/item-grid.component';
import { AddItemComponent } from './add-item/add-item.component';

export const routes: Routes = [
    {
      path: '',
      component: MaterialFormComponent
    },
    {
      path: 'item',
      component: ItemGridComponent
    },
    {
      path: 'add-item',
      component: AddItemComponent
    }
  ];
