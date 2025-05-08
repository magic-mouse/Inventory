import { Routes } from '@angular/router';
import { MaterialFormComponent } from './materials/material-form/material-form.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditAttributeComponent } from './edit-attribute/edit-attribute.component';

export const routes: Routes = [
    {
      path: '',
      component: MaterialFormComponent
    },
    {
      path: 'add-item',
      component: AddItemComponent
    },
    {
      path: 'add-attribute/:type',
      component: AddCategoryComponent
    },
    {
      path: 'edit-attribute/:type/:id',
      component: EditAttributeComponent
    }

  ];
