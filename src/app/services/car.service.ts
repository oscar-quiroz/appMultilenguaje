import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  list:any[]=[]

  constructor() { }

  addProduct(producto:Producto){
    this.list.push(producto)
  }

  deleteProduct(id:number){
   let j = this.list.indexOf(this.list.find((item)=>{ 
     if(item.id == id){
       return true;
     }else{
       return false;
     }
   }))
  this.list.splice(j,1)
  }

  print(){
    console.log(this.list)
  }
}
