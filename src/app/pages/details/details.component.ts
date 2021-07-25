import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Producto } from '../../interfaces/Producto';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  prodcuts:any={}
  prodcut:any={}
  count:number=0;
  texto:string ="texto.carro"

  constructor(private router:ActivatedRoute, private carService:CarService) { }

  ngOnInit(): void { 

    this.router.params.subscribe(({id}) => {
      console.log(id)
        this.prodcuts = this.carService.getList().subscribe(data => {
        this.prodcut = data.find((item:any) => item.id ==id)
       console.log(this.prodcut)
       })
    });

  }


  addProduct(product:Producto){
    if(this.count ===0){
      this.carService.addProduct(product)
      this.carService.print()
      this.texto ="texto.carro2"
      this.count=1;
    }else{
      console.log("Quitar del carro")
      this.carService.deleteProduct(this.prodcut.id)
      this.carService.print()
      this.texto ="texto.carro"
      this.count = 0;
    }
    
  }


}
