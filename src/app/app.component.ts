import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{




  carInfo: Subscription = new Subscription();
  title = 'appMultilenguaje';
  public language:string = "es";
  public activeHam:string = "";
  count=0;
  mayor=false;


  
  constructor(private translate:TranslateService, private carService:CarService) { 
    this.translate.setDefaultLang(this.language);
    
  }
  ngOnInit(): void {
    this.carInfo = this.carService.carInfo
    .subscribe( res => {
      this.count = res;
      if(res === 0){
        this.mayor =false;
      }else{
        this.mayor =true;
      }

      
    }) 
  }

  public changeLanguage(lang:string):void{
    this.language = lang;
    this.translate.use(lang);
  }

  public getLength(){
    if(this.carService.getLength() === 0){
      this.mayor =true;
      this.count=this.carService.getLength();
    }else{
      this.mayor =false;
    }
    

  }

}
