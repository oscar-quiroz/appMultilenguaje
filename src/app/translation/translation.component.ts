import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Producto } from '../interfaces/Producto';
import { CarService } from '../services/car.service';
import { Observable } from 'rxjs';


type NewType = Producto[];

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css'],
})
export class TranslationComponent implements OnInit {
  public language: string = 'es';
  public activeHam: string = '';

  list: Observable<any[]>;

  constructor(
    private translate: TranslateService,
    private carService:CarService
  ) {
    this.translate.setDefaultLang(this.language);
    this.list = this.carService.getList()
  }

  ngOnInit(): void {}

  public changeLanguage(lang: string): void {
    this.language = lang;
    this.translate.use(lang);
  }

  public changeState() {
    if (this.activeHam === 'is-active') {
      this.activeHam = '';
    } else {
      this.activeHam = 'is-active';
    }
  }

 
}
