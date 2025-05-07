import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../item.service'; 
import { Material } from '../../material.model'; 
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-material-form',
  standalone: true,
  imports: [ CommonModule , TableModule],
  providers: [],
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {
  materials: Material[] = [];  // Array of materials

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.loadMaterials();  // Fetch materials when component initializes
  }

  // Method to load materials
  loadMaterials() {
    this.itemService.getMaterials().then(data => {
      this.materials = data.data;  // Assuming data returned matches the Material interface
      console.log(this.materials);  // For debugging
    });
  }

  editMaterial(material: Material) {
    // Open a modal, navigate to another page, or show a form for editing the material
    console.log('Editing material:', material);
  }

  totalQuantity(): number {
    return this.materials.reduce((acc, m) => acc + m.quantity, 0);
  }
  
  totalValue(): number {
    return this.materials.reduce((acc, m) => acc + (m.quantity * (m.price || 0)), 0);
  }
  
  averagePrice(): number {
    const validMaterials = this.materials.filter(m => m.price != null && m.quantity > 0);
    const totalUnits = validMaterials.reduce((acc, m) => acc + m.quantity, 0);
    const totalValue = validMaterials.reduce((acc, m) => acc + (m.quantity * m.price!), 0);
  
    return totalUnits ? totalValue / totalUnits : 0;
  }
  
}
