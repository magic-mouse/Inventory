import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../item.service'; 
import { Material } from '../../material.model'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-material-form',
  standalone: true,
  imports: [ CommonModule ],
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
}
