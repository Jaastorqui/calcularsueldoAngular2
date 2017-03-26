import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '@angular/material';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import 'hammerjs';


import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';



export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



/*  Router  */
const appRoutes: Routes = [
  { path: '', component: FormComponent },
  { path: 'ejemplo', component : EjemploComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EjemploComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
