import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appMultilenguaje';
  public language:string = "es";
  public activeHam:string = "";
  
  constructor(private translate:TranslateService, ) { 
    this.translate.setDefaultLang(this.language);
    
  }

  public changeLanguage(lang:string):void{
    this.language = lang;
    this.translate.use(lang);
  }

}
