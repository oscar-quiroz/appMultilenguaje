import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/Producto';
import {map} from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  listProdcuts: Observable<any[]>;
  list: any[] = [];
  prodcut:any={}


  constructor( firestore: AngularFirestore) {
    this.listProdcuts = firestore.collection('Producto').valueChanges();
  }

  addProduct(producto: Producto) {
    this.list.push(producto);
  }

  deleteProduct(id: number) {
    let j = this.list.indexOf(
      this.list.find((item) => {
        if (item.id == id) {
          return true;
        } else {
          return false;
        }
      })
    );
    this.list.splice(j, 1);
  }

  print() {
    console.log(this.list);
  }

  getCarList(){
    return this.list
  }


   //me suscribo a una matriz observable de productos, data es la matriz
    // reocorro data buscando un item el cual posea el id suministrado y ahi acaba
   getProduct(id: number) {
      this.listProdcuts.subscribe(data => {
       this.prodcut = data.find((item:any) => item.id == id)
       return this.prodcut
      })
    }

    getList(){
      return this.listProdcuts;
    }

    // console.log(producto)

}
