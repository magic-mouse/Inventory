import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { Material } from './material.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private supabase = createClient('https://lftvgymawgjlfcibauxc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdHZneW1hd2dqbGZjaWJhdXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMTU2NTEsImV4cCI6MjA2MTU5MTY1MX0.ww7ofKhKSwHrQc6vZG9nH_mAGewl0fPo8TQ9f82ce7w');
  
  async getItems(): Promise<any> {
   return await this.supabase
        .from('Machines')
        .select('*');
  }

  async getMaterials(): Promise<any> {
    return await this.supabase
         .from('materials')
         .select('*');
   }

   async addMaterial(material: Material) {
    return await this.supabase
      .from('materials')
      .insert([material]);
  }
}
