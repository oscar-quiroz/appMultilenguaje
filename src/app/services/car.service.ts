import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/Producto';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  list: any[] = [];
  listFirestore: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.listFirestore = firestore.collection('listFirestore').valueChanges();
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
}
