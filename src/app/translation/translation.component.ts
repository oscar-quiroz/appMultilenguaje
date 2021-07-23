import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  public language:string = "es";
  public activeHam:string = "";

  constructor(private translate:TranslateService) { 
    this.translate.setDefaultLang(this.language)
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
