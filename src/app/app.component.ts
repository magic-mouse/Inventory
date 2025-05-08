import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, ToastModule, MenubarModule],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inventory-tracker';

  items = [
    {
      label: '🏠 Home',
      icon: 'pi pi-fw pi-home',
      routerLink: '/'
    },
    {
      label: 'Add',
      icon: 'pi pi-fw pi-plus-circle',
      items: [
        {
          label: '➕ Add Item',
          icon: 'pi pi-fw pi-plus',
          routerLink: '/add-item'
        },
        {
          label: 'Add Location',
          icon: 'pi pi-fw pi-location',
          routerLink: '/add-attribute/location'
        },
        {
          label: 'Add Category',
          icon: 'pi pi-fw pi-list',
          routerLink: '/add-attribute/category'
        },
        {
          label: 'Add Unit',
          icon: 'pi pi-fw pi-cogs',
          routerLink: '/add-attribute/unit'
        }
      ]
    }
  ];
}
