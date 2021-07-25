import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

// importamos los modulos para multilenguaje
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslationComponent } from './translation/translation.component';
import { CardComponent } from './components/card/card.component';
import { CarComponent } from './pages/car/car.component';
import { DetailsComponent } from './pages/details/details.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { CardCarComponent } from './components/card-car/card-car.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslationComponent,
    CardComponent,
    CarComponent,
    DetailsComponent,
    CardCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    }),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
