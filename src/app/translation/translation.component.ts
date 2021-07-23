import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Producto } from '../interfaces/Producto';
import { CarService } from '../services/car.service';

type NewType = Producto[];

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  public language:string = "es";
  public activeHam:string = "";
 list:NewType = [
  {
    "id":0,
    "img":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/69721f2e7c934d909168a80e00818569_9366/Tenis_Stan_Smith_(UNISEX)_Blanco_M20324_01_standard.jpg",
    "nombre": "Tenis stan smith originals",
    "proveedor": "proveedor",
    "precio":169000,
    "disponible":true,
  },{
    "id":1,
    "img":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1a3204b040554d219600ac9200bb9018_9366/Tenis_U_Path_Run_Negro_FY5688_01_standard.jpg",
    "proveedor":"proveedor",
    "nombre": "Tenis stan smith originals",
    "precio":169000,
    "disponible":true
  },
  {
    "id":2,
    "img":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8653177bb5b74750aa21ac9200e38f3d_9366/Tenis_Multix_Rosa_FZ3455_01_standard.jpg",
    "proveedor":"proveedor",
    "nombre": "Tenis stan smith originals",
    "precio":169000,
    "disponible":true
  }, {
    "id":1,
    "img":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b142d9f26ef54cc8b0feab6c011e22a4_9366/Tenis_U_Path_X_Blanco_FV9255_01_standard.jpg",
    "proveedor":"proveedor",
    "nombre": "Tenis stan smith originals",
    "precio":169000,
    "disponible":true
  }];

  

  constructor(private translate:TranslateService, ) { 
    this.translate.setDefaultLang(this.language);
    
  }

  ngOnInit(): void {
  }


  public changeLanguage(lang:string):void{
    this.language = lang;
    this.translate.use(lang);
  }

  public changeState(){
    if( this.activeHam ==="is-active"){
      this.activeHam =""
    }else{
      this.activeHam ="is-active"
    }
  }
  
}
