import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Producto } from '../interfaces/Producto';
import { CarService } from '../services/car.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

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
    firestore: AngularFirestore
  ) {
    this.translate.setDefaultLang(this.language);

    this.list = firestore.collection('Producto').valueChanges();
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
